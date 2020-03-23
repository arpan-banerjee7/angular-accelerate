import { TestBed } from "@angular/core/testing";
import { AlbumDetailsComponent } from "./album-details.component";
import { AlbumsComponent } from "../albums.component";
import { AppRoutingModule } from "src/app/app.routing.module";
import { PhotosComponent } from "src/app/photos/photos.component";
import { PhotoDetailComponent } from "src/app/photos/photo-detail/photo-detail.component";
import { AlbumService } from "src/app/service/album.service";
import { HttpClientModule } from "@angular/common/http";

describe("Component:AlbumDetail", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AlbumDetailsComponent,
        AlbumsComponent,
        PhotosComponent,
        PhotoDetailComponent
      ],
      imports: [AppRoutingModule, HttpClientModule],
      providers: [AlbumService]
    });
  });

  it("shoould create the app", () => {
    let fixture = TestBed.createComponent(AlbumsComponent);
    let app = fixture.debugElement.componentInstance;
    // let albumService = fixture.debugElement.injector.get(AlbumService);
    // fixture.detectChanges();
    expect(app).toBeTruthy();
  });
});
