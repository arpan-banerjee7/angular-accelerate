import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { map, tap } from "rxjs/operators";
import { Album } from "../model/album.model";
import { Observable } from "rxjs";
import { UserName } from "../model/user.model";

@Injectable({ providedIn: "root" })
export class AlbumService {
  constructor(private http: HttpClient) {}
  albumUrl = "http://jsonplaceholder.typicode.com/albums";
  userUrl = "http://jsonplaceholder.typicode.com/users?id=";
  photosUrl = "http://jsonplaceholder.typicode.com/photos";
  fetchAlbums(): Observable<any> {
    return this.http.get<Album[]>(this.albumUrl).pipe(
      tap(albums => {
        albums.map((album: { userId: String; userName: String }) => {
          this.fetchUsers(album.userId).subscribe((user: any) => {
            album.userName = user[0].username;
          });
        });
      })
    );
  }
  fetchUsers(id: String): Observable<any> {
    //let userId = new HttpParams().set("userId", id);
    return this.http.get(this.userUrl + id);
  }

  fetchPhotosForSelectedAlbums(selectedAlbumId: string): Observable<any> {
    let albumId = new HttpParams().set("albumId", selectedAlbumId);
    return this.http.get(this.photosUrl, {
      params: albumId
    });
  }
}
