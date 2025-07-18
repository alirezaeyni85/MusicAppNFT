import { ChangeDetectionStrategy, Component, inject, Input, OnInit, signal } from '@angular/core';
import { MuTimeDiscountComponent } from "../album-page/mu-time-discount/mu-time-discount.component";
import { ActivatedRoute } from '@angular/router';
import { MuAlbumsMusic } from '../../../../../core/service/albums/mu-albums-music.service';
import { InformationArtist } from '../../../../../core/service/albums/descriptionArtist/mu-information-artist.service';
import { MuListAlbumArtistComponent } from "../mu-list-album-artist/mu-list-album-artist.component";

@Component({
  standalone:true,
  selector: 'app-mu-part-info',
  imports: [MuTimeDiscountComponent, MuListAlbumArtistComponent],
  templateUrl: './mu-part-info.component.html',
  styleUrl: './mu-part-info.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class MuPartInfoComponent implements OnInit {
  public selectAlbum:any = signal([])
  public infoOfArtist:any[] =[];

  public routerActive:ActivatedRoute =inject(ActivatedRoute);
  public albums:any = inject(MuAlbumsMusic)
  public listOfSongs:any = signal({})


ngOnInit(): void {
      const getIdFromActivePage =this.routerActive.snapshot.params['id'];
      console.log(getIdFromActivePage)
      const getAlbums =this.albums.getDatas(getIdFromActivePage,{includeAlbum:true,includeSongs:false}).album
      this.selectAlbum.set([getAlbums])
      this.listOfSongs.set(...this.selectAlbum().map((item:any)=>item.songs))
      console.log("songsArray",this.listOfSongs())
  }
  

getAlbum(arrays:object[],id:number){
 return arrays.find((item:any) =>item.id ==id )
}



}
