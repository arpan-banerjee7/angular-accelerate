import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { FnParam } from "@angular/compiler/src/output/output_ast";
import { AlbumService } from "../service/album.service";
import { Photo } from "../model/photo.model";
import { PhotoSevice } from "./photo.service";

@Component({
  selector: "app-photos",
  templateUrl: "./photos.component.html",
  styleUrls: ["./photos.component.css"]
})
export class PhotosComponent implements OnInit {
  selectedAlbumId: string;
  photoList: Photo[] = [];
  photoSelected: Photo;
  isLoading: Boolean;
  constructor(
    private rout: ActivatedRoute,
    private albumService: AlbumService,
    private router: Router,
    private photoService: PhotoSevice
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.rout.params.subscribe((params: Params) => {
      this.selectedAlbumId = params["id"];
      this.getPhotos(this.selectedAlbumId);
    });
  }

  getPhotos(id: string) {
    this.albumService.fetchPhotos(this.selectedAlbumId).subscribe(photo => {
      this.photoList = photo;
      this.isLoading = false;
    });
  }

  displayPhoto(url: string, title: string) {
    let photoObject = {
      url: url,
      title: title
    };
    console.log(photoObject);
    this.photoService.photoSelected.next(photoObject);
    console.log("photo emitted along with details");
    // this.photoService.urlService = url;
    this.router.navigate(["/photo-detail"]);
  }
}
