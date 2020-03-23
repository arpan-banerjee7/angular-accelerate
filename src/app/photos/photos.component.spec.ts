import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PhotosComponent } from "./photos.component";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { PhotoSevice } from "./photo.service";

describe("PhotosComponent", () => {
  let component: PhotosComponent;
  let fixture: ComponentFixture<PhotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PhotosComponent],
      imports: [RouterModule.forRoot([]), HttpClientModule],
      providers: [PhotoSevice]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it("should create PhotoService", () => {
    const service: PhotoSevice = TestBed.get(PhotoSevice);
    expect(service).toBeTruthy();
  });
  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
