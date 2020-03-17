import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { FnParam } from "@angular/compiler/src/output/output_ast";
import { AlbumService } from "../service/album.service";

@Component({
  selector: "app-photos",
  templateUrl: "./photos.component.html",
  styleUrls: ["./photos.component.css"]
})
export class PhotosComponent implements OnInit {
  selectedAlbumId: string;
  constructor(
    private rout: ActivatedRoute,
    private albumService: AlbumService
  ) {}

  ngOnInit() {
    this.rout.params.subscribe((params: Params) => {
      this.selectedAlbumId = params["id"];
      this.albumService
        .fetchPhotos(this.selectedAlbumId)
        .subscribe(data => console.log(data));
      //alert("album selecyted" + this.selectedAlbumId);
    });
  }
}
