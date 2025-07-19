import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { delay, of } from 'rxjs';
import { MuAlbumsMusic } from '../service/albums/mu-albums-music.service';
import { MuInfoCreatorsService } from '../service/artists/mu-info-creators.service';

export const muAlbumArtistResolver: ResolveFn<boolean> = (route, state) => {
   const albums:any = inject(MuAlbumsMusic)
   const creators = inject(MuInfoCreatorsService).infoCreators;
  const id = Number(route.paramMap.get('id'))
   const getPath =  route.url.map(item=>item.path)[0]
  const selectedAlbum = albums.getDatas(id,{includeAlbum:true,includeSongs:false})
  let sendDatas;
  if(getPath =='artist'){
   sendDatas = selectedAlbum;
  }else if(getPath == 'ranking'){
    sendDatas = creators;
  }else{
    sendDatas = null
  }
  return of(sendDatas).pipe(delay(1000));
};
