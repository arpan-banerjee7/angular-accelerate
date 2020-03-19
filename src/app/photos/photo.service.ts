import { Injectable } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Injectable({ providedIn: "root" })
export class PhotoSevice {
  photoSelected = new EventEmitter();
}
