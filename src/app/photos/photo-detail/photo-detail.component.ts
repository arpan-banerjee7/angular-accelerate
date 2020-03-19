import { Component, OnInit, Input } from "@angular/core";
import { PhotoSevice } from "../photo.service";
import { Photo } from "src/app/model/photo.model";

@Component({
  selector: "app-photo-detail",
  templateUrl: "./photo-detail.component.html",
  styleUrls: ["./photo-detail.component.css"]
})
export class PhotoDetailComponent implements OnInit {
  @Input() selectedPhotoUrl: string;
  @Input() selectedPhotoTitle: string;
  url: string;
  constructor(private photoService: PhotoSevice) {}

  ngOnInit() {
    this.photoService.photoSelected.subscribe(photoObject => {
      this.url = photoObject.url;
      console.log(photoObject.url);
    });
  }
}
