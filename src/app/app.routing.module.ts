import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AlbumsComponent } from "./albums/albums.component";

const appRoutes: Routes = [
  { path: "", component: AlbumsComponent },
  { path: "albums", component: AlbumsComponent },
  { path: "**", redirectTo: "albums" }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
