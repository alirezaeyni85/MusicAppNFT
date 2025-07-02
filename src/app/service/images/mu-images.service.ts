import { Injectable } from '@angular/core';
import { ImagesTrendCollection } from '../../interface/images-trend-collection';

@Injectable({
  providedIn: 'root'
})
export class MuImagesService {

  constructor() { }

  public imagesTrendCollection:ImagesTrendCollection[] =[
    {id:1,albumName:'DSGN Animals',artistName:'MrFox',mainImg:'./images-trend-collection/dog.png',minimalImages:['./minimal-Images/rabbit.png','./minimal-Images/beard.png'], imgAvat:'./avators/fox.png'},
    {id:2,albumName:'Magic Mushrooms',artistName:'Shroomie', mainImg:'./images-trend-collection/mashroom.png', minimalImages:['./minimal-Images/mashroomMini.png','./minimal-Images/mashroomMini.png'], imgAvat:'./avators/humon.png'},
    {id:3,albumName:'Disco Machines',artistName:'BeKind2Robots' ,mainImg:'./images-trend-collection/ironMan.png',minimalImages:['./minimal-Images/ironManMini.png','./minimal-Images/ironManMini.png'],imgAvat:'./avators/ironAvator.png'}
  ]

}
