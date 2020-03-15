import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AlbumsComponent } from "./albums/albums.component";
import { AppRoutingModule } from "./app.routing.module";
import { HttpClientModule } from "@angular/common/http";
import { AlbumDetailsComponent } from './albums/album-details/album-details.component';

@NgModule({
  declarations: [AppComponent, AlbumsComponent, AlbumDetailsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
