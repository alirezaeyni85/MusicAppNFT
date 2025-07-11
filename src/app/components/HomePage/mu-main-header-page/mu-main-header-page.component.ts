import { Component, inject } from '@angular/core';
import { MuInfoArtistsService } from '../../../service/infoes-artists/mu-info-artists.service';
import { MuTrendCollPageComponent } from "../mu-part-trend/mu-trend-coll-page/mu-trend-coll-page.component";
import { MuCategoriesAlbumsComponent } from "../browseCategories/mu-categories-albums/mu-categories-albums.component";
import { MuDiscoverAlbumsComponent } from "../discoverAlbums/mu-discover-albums/mu-discover-albums.component";

@Component({
  selector: 'app-mu-main-header-page',
  imports: [MuTrendCollPageComponent, MuCategoriesAlbumsComponent, MuDiscoverAlbumsComponent],
  templateUrl: './mu-main-header-page.component.html',
  styleUrl: './mu-main-header-page.component.css'
})
export class MuMainHeaderPageComponent {
public astisticsArtists = inject(MuInfoArtistsService)
constructor(){
  console.log(this.astisticsArtists.statistics)
}
}
