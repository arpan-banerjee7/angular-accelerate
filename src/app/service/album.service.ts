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
  fetchAlbums(): Observable<any> {
    return this.http.get<Album[]>(this.albumUrl).pipe(
      tap(albums => {
        albums.map(singleAlbum => {
          this.fetchUsers(singleAlbum.userId).subscribe((user: any) => {
            singleAlbum.userName = user[0].username;
          });
        });
      })
    );
  }
  fetchUsers(id: String): Observable<any> {
    //let userId = new HttpParams().set("userId", id);
    return this.http.get(this.userUrl + id);
  }
}
