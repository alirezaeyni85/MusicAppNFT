import { Injectable } from '@angular/core';
import { ImagesTrendCollection } from '../../interface/images-trend-collection';

@Injectable({
  providedIn: 'root'
})
export class MuImagesService {

  constructor() { }

  public imagesTrendCollection:ImagesTrendCollection[] =[
  
  ]

  public imagesCategoriesAlbums:any[] = [
    {id:1,name:'Art', img:'./ImagesCategories/art.png'},
    {id:2,name:'Collectibles', img:'./ImagesCategories/collectibles.png'},
    {id:3,name:'Music', img:'./ImagesCategories/music.png'},
    {id:4,name:'Photography', img:'./ImagesCategories/photography.png'},
    {id:5,name:'Video', img:'./ImagesCategories/video.png'},
    {id:6,name:'Utility', img:'./ImagesCategories/utility.png'},
    {id:7,name:'Sport', img:'./ImagesCategories/sport.png'},
    {id:8,name:'Virtual Worlds', img:'./ImagesCategories/virtualWorlds.png'},
  ]

}
