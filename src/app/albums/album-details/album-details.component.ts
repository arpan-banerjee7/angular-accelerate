import { Component, OnInit, Input } from "@angular/core";
import { Album } from "src/app/model/album.model";

@Component({
  selector: "app-album-details",
  templateUrl: "./album-details.component.html",
  styleUrls: ["./album-details.component.css"]
})
export class AlbumDetailsComponent implements OnInit {
  @Input() albumDetail: Album;
  constructor() {}

  ngOnInit() {}
}
