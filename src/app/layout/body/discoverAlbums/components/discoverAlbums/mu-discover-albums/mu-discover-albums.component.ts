import { Component, inject, OnInit, signal } from '@angular/core';
import { MuAlbumsMusic } from '../../../../../../core/service/albums/mu-albums-music.service';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { get } from 'http';


@Component({
  selector: 'app-mu-discover-albums',
  imports: [RouterModule],
  templateUrl: './mu-discover-albums.component.html',
  styleUrl: './mu-discover-albums.component.css',
  providers:[]
})
export class MuDiscoverAlbumsComponent implements OnInit {
  public router =inject(Router)
  public getInfoArtist:any = inject(MuAlbumsMusic);
  public filteredSongs:any = signal({})
  constructor(){}

ngOnInit(): void {
  let getSongs =this.getInfoArtist.getDatas(0,{includeAlbum:false,includeSongs:true}).songs
  this.filteredSongs.set(getSongs.slice(0,3))
  console.log(this.filteredSongs)
}
  onArtistClick(num:number){
   console.log((num))
  }
  onNavigate(id:number,albumName:string){
     this.router.navigate(['artist',id],{
      fragment:albumName,
      // queryParams:{value:'lksdfj'}
     })
  }

}
