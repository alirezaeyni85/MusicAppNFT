import { Component } from '@angular/core';
import { MuMainHeaderPageComponent } from "../../header/mu-layout/header-page/components/mu-main-header-page/mu-main-header-page.component";
import { MuTrendCollPageComponent } from "../trendCollection/components/mu-part-trend/mu-trend-coll-page/mu-trend-coll-page.component";
import { MuCategoriesAlbumsComponent } from "../categories/component/browseCategories/mu-categories-albums/mu-categories-albums.component";
import { MuDiscoverAlbumsComponent } from "../discoverAlbums/components/discoverAlbums/mu-discover-albums/mu-discover-albums.component";

@Component({
  selector: 'app-mu-main-body',
  imports: [MuMainHeaderPageComponent, MuTrendCollPageComponent, MuCategoriesAlbumsComponent, MuDiscoverAlbumsComponent],
  templateUrl: './mu-main-body.component.html',
  styleUrl: './mu-main-body.component.css'
})
export class MuMainBodyComponent {

}
