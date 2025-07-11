import { Component, inject } from '@angular/core';
import { DetailsDiscoverImage } from '../../../../service/details-discover-images/detailsDiscoverImage.service';
import { get } from 'http';

@Component({
  selector: 'app-mu-discover-albums',
  imports: [],
  templateUrl: './mu-discover-albums.component.html',
  styleUrl: './mu-discover-albums.component.css'
})
export class MuDiscoverAlbumsComponent  {
  public getInfoArtist: any = inject(DetailsDiscoverImage)
  constructor(){}

}
