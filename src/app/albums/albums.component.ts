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
  isLoading: Boolean;

  ngOnInit() {
    this.isLoading = true;
    this.getAlbums();
  }

  getAlbums() {
    this.albumService.fetchAlbums().subscribe(data => {
      this.listAlbums = data;
      console.log(data);
      this.isLoading = false;
    });
  }
}
