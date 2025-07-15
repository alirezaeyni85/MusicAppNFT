import { Component, inject, OnInit } from '@angular/core';
import { MuTimeDiscountComponent } from "../mu-time-discount/mu-time-discount.component";
import { ActivatedRoute } from '@angular/router';
import { MuAlbumsMusic } from '../../../service/albums/mu-albums-music.service';
import { InformationArtist } from '../../../service/albums/descriptionArtist/mu-information-artist.service';

@Component({
  selector: 'app-mu-part-info',
  imports: [MuTimeDiscountComponent],
  templateUrl: './mu-part-info.component.html',
  styleUrl: './mu-part-info.component.css'
})
export class MuPartInfoComponent implements OnInit {
  public routerActive:ActivatedRoute =inject(ActivatedRoute);
  public informationArtist = inject(InformationArtist)
  public albums = inject(MuAlbumsMusic)
  public selectAlbum:any[] = []
  public infoOfArtist:any[] =[];

ngOnInit(): void {
      const getIdFromArtist =this.routerActive.snapshot.params['id']
    this.selectAlbum.push(this.getAlbum(this.albums.infoesAlbums,getIdFromArtist))
    this.infoOfArtist.push(this.getAlbum(this.informationArtist.infoesOfArtist,getIdFromArtist))

}


getAlbum(arrays:object[],id:number){
 return arrays.find((item:any) =>item.id ==id )
}



}
