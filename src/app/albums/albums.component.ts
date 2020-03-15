import { Component, OnInit } from "@angular/core";
import { AlbumService } from "../service/album.service";
import { Album } from "../model/album.model";

@Component({
  selector: "app-albums",
  templateUrl: "./albums.component.html",
  styleUrls: ["./albums.component.css"]
})
export class AlbumsComponent implements OnInit {
  constructor(private albumService: AlbumService) {}
  listAlbums: Album[] = [];
  albumtest: String[] = [];
  ngOnInit() {
    this.getAlbums();
  }

  getAlbums() {
    this.albumService.fetchAlbums().subscribe(data => {
      this.albumtest = data;
      console.log(data);
    });
  }
}
