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
  public isValid:any =false;

ngOnInit(): void {  
        //assign album in selectAlbum signal
       this.routerActive.data.subscribe(albumData=>{
      this.selectAlbum.set([albumData['albumData'].album])
      })


        //assign album in songs signal
      this.listOfSongs.set(...this.selectAlbum().map((item:any)=>item.songs))
      console.log('selectedAlbum',this.selectAlbum())
  }
  

getAlbum(arrays:object[],id:number){
 return arrays.find((item:any) =>item.id ==id )
}



}
