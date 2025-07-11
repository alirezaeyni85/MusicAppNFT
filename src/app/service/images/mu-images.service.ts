import { Injectable } from '@angular/core';
import { ImagesTrendCollection } from '../../interface/images-trend-collection';

@Injectable({
  providedIn: 'root'
})
export class MuImagesService {

  constructor() { }

  public imagesTrendCollection:ImagesTrendCollection[] =[
    {id:1, qauntityLike:8, albumName:'DSGN Animals',artistName:'MrFox',mainImg:'./images-trend-collection/dog.png',minimalImages:['./minimal-Images/rabbit.png','./minimal-Images/beard.png'], imgAvat:'./avators/fox.png'},
    {id:2, qauntityLike:30, albumName:'Magic Mushrooms',artistName:'Shroomie', mainImg:'./images-trend-collection/mashroom.png', minimalImages:['./minimal-Images/mashroomMini.png','./minimal-Images/mashroomMini.png'], imgAvat:'./avators/humon.png'},
    {id:3, qauntityLike:192, albumName:'Disco Machines',artistName:'BeKind2Robots' ,mainImg:'./images-trend-collection/ironMan.png',minimalImages:['./minimal-Images/ironManMini.png','./minimal-Images/ironManMini.png'],imgAvat:'./avators/ironAvator.png'},
    {id:4, qauntityLike:20, albumName:'DSGN Animals',artistName:'MrFox',mainImg:'./images-trend-collection/dog.png',minimalImages:['./minimal-Images/rabbit.png','./minimal-Images/beard.png'], imgAvat:'./avators/fox.png'},

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
