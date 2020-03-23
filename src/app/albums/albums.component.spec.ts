import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AlbumsComponent } from "./albums.component";
import { AlbumDetailsComponent } from "./album-details/album-details.component";
import { AppRoutingModule } from "../app.routing.module";
import { PhotosComponent } from "../photos/photos.component";
import { PhotoDetailComponent } from "../photos/photo-detail/photo-detail.component";
import { AlbumService } from "../service/album.service";
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { Album } from "../model/album.model";
import { Observable } from "rxjs";

describe("AlbumsComponent", () => {
  let component: AlbumsComponent;
  let fixture: ComponentFixture<AlbumsComponent>;
  let albumService: AlbumService;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AlbumsComponent,
        AlbumDetailsComponent,
        PhotosComponent,
        PhotoDetailComponent
      ],
      imports: [AppRoutingModule, HttpClientTestingModule],
      providers: [AlbumService, HttpTestingController]
    }).compileComponents();
    albumService = TestBed.get(AlbumService);
    httpMock = TestBed.get(HttpTestingController);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should be created", () => {
    expect(albumService).toBeTruthy();
  });
  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("should retrieve posts from the API via GET", () => {
    const dummyAlbums: Album[] = [
      {
        userId: "1",
        userName: "Arpan",
        id: 1,
        title: "quidem molestiae enim"
      },
      {
        userId: "1",
        userName: "Banerjee",
        id: 2,
        title: "sunt qui excepturi placeat culpa"
      }
    ];
    let obs$ = Observable.create(dummyAlbums);
    albumService.fetchAlbums().subscribe(albums => {
      expect(albums.length).toBe(2);
      expect(albums).toEqual(dummyAlbums);
    });
    let spy = spyOn(albumService, "fetchAlbums").and.returnValue(
      obs$.subscribe()
    );
    // expect(request.request.method).toBe("GET");
    // request.flush(dummyAlbums);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.listAlbums).toEqual([]);
    });
  });
});
