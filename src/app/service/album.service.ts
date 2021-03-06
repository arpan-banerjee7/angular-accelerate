import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { map, tap } from "rxjs/operators";
import { Album } from "../model/album.model";
import { Observable } from "rxjs";
import { UserName } from "../model/user.model";

@Injectable({ providedIn: "root" })
export class AlbumService {
  constructor(private http: HttpClient) {}
  albumUrl =
    "https://cors-anywhere.herokuapp.com/http://jsonplaceholder.typicode.com/albums";
  userUrl =
    "https://cors-anywhere.herokuapp.com/http://jsonplaceholder.typicode.com/users?id=";
  photoUrl =
    "https://cors-anywhere.herokuapp.com/http://jsonplaceholder.typicode.com/photos";

  //get the album title along with the user name
  fetchAlbums() {
    return this.http.get<Album[]>(this.albumUrl).pipe(
      tap(albums => {
        albums.map((album: { userId: string; userName: string }) => {
          this.fetchUsers(album.userId).subscribe((user: any) => {
            album.userName = user[0].username;
          });
        });
        // console.log(albums);
      })
    );
  }

  //get the user name of the particular album with the help of userId property in albums
  fetchUsers(id: String): Observable<any> {
    //let userId = new HttpParams().set("userId", id);
    return this.http.get(this.userUrl + id);
  }

  //get the photos of a particular album using the albumId
  fetchPhotos(id: string): Observable<any> {
    let selectedId = new HttpParams().set("albumId", id);
    return this.http.get(this.photoUrl, {
      params: selectedId
    });
  }
}
