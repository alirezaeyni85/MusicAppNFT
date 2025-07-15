import { Component, inject } from '@angular/core';
import { MuAlbumsMusic } from '../../../../service/albums/mu-albums-music.service';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-mu-discover-albums',
  imports: [RouterModule],
  templateUrl: './mu-discover-albums.component.html',
  styleUrl: './mu-discover-albums.component.css'
})
export class MuDiscoverAlbumsComponent  {
  public router =inject(Router)
  public getInfoArtist: any = inject(MuAlbumsMusic).infoesAlbums.slice(0,3)
  constructor(){}


  onArtistClick(num:number){
   console.log((num))
  }
  onNavigate(id:number,albumName:string){
     this.router.navigate(['artist',id],{
      fragment:albumName
     })
  }

}
