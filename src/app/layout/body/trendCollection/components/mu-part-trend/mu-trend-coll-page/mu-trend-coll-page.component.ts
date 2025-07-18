import { Component, inject, OnInit, Signal, signal } from '@angular/core';
import { NgFor } from '@angular/common';
import { MuAlbumsMusic } from '../../../../../../core/service/albums/mu-albums-music.service';
import { MuToCreatorsComponent } from '../../../../creators/components/creators/mu-to-creators/mu-to-creators.component';

@Component({
  selector: 'app-mu-trend-coll-page',
  imports: [NgFor, MuToCreatorsComponent],
  templateUrl: './mu-trend-coll-page.component.html',
  styleUrl: './mu-trend-coll-page.component.css'
})
export class MuTrendCollPageComponent implements OnInit{
  // public getImages:ImagesTrendCollection[]= inject(MuAlbumsMusic).infoesAlbums;
  public filterdTrendCollection:any = signal({});

  public songs:any[] |any = inject(MuAlbumsMusic);




constructor(){}

ngOnInit(): void {
  const getSongs = this.songs.getDatas(1,{includeSongs:true,includeAlbum:false}).songs
  this.filterdTrendCollection.set(getSongs.slice(0,3))


}




}
