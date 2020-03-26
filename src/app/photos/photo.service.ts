import { Injectable } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: "root" })
export class PhotoSevice {
  photoSelected = new BehaviorSubject<{ url: string; title: string }>(
    undefined
  );
  //urlService: string;
}
