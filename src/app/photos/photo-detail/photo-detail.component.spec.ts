import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PhotoDetailComponent } from "./photo-detail.component";
import { PhotoSevice } from "../photo.service";

describe("PhotoDetailComponent", () => {
  let component: PhotoDetailComponent;
  let fixture: ComponentFixture<PhotoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PhotoDetailComponent],
      providers: [PhotoSevice]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("should use url from photo service", () => {
    let urlService = fixture.debugElement.injector.get(PhotoSevice);
    fixture.detectChanges;
    expect(urlService.urlService).toEqual(component.url);
  });
});
