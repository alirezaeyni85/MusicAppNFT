import { Component, inject } from '@angular/core';
import { MuInfoArtistsService } from '../../../service/infoes-artists/mu-info-artists.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-mu-main-header-page',
  imports: [NgFor],
  templateUrl: './mu-main-header-page.component.html',
  styleUrl: './mu-main-header-page.component.css'
})
export class MuMainHeaderPageComponent {
public astisticsArtists = inject(MuInfoArtistsService)
constructor(){
  console.log(this.astisticsArtists.statistics)
}
}
