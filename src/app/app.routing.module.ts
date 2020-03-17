import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AlbumsComponent } from "./albums/albums.component";
import { PhotosComponent } from "./photos/photos.component";

const appRoutes: Routes = [
  { path: "", component: AlbumsComponent },
  { path: "albums", component: AlbumsComponent },
  { path: "albums/:id", component: PhotosComponent },
  { path: "**", redirectTo: "albums" }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
