import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing.module";
import { AlbumsComponent } from "./albums/albums.component";
import { PhotosComponent } from "./photos/photos.component";
import { PhotoDetailComponent } from "./photos/photo-detail/photo-detail.component";
import { AlbumDetailsComponent } from "./albums/album-details/album-details.component";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AlbumsComponent,
        AlbumDetailsComponent,
        PhotosComponent,
        PhotoDetailComponent
      ],
      imports: [AppRoutingModule, HttpClientModule, RouterModule.forRoot([])]
    }).compileComponents();
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Photoalbums'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual("Photoalbums");
  });

  //only to be tested when the app is runnning
  // it("should render title", () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector(".content span").textContent).toContain(
  //     "Photoalbums app is running!"
  //   );
  // });
});
