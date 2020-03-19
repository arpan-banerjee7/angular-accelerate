import { Component, OnInit, Input } from "@angular/core";
import { PhotoSevice } from "../photo.service";
import { Photo } from "src/app/model/photo.model";

@Component({
  selector: "app-photo-detail",
  templateUrl: "./photo-detail.component.html",
  styleUrls: ["./photo-detail.component.css"]
})
export class PhotoDetailComponent implements OnInit {
  url: string;
  title: string;
  constructor(private photoService: PhotoSevice) {}

  ngOnInit() {
    // this.photoService.photoSelected.subscribe(photoObject => {
    //   this.url = photoObject.url;
    // this.title=photoObject.title;
    //   console.log(photoObject.url);
    // });
    this.url = this.photoService.urlService;
    console.log(this.url);
  }
}
