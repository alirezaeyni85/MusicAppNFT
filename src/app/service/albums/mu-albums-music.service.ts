import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class MuAlbumsMusic {
    constructor(){}
    public infoesAlbums:any[] =[
        {id:1,albumView:10 ,qauntityLike:30,albumName:'Distant Galaxy',artistName:'MoonDancer',imgProf:'./ImagesDiscover/ProfileArtist-Discover/Asset 12 2.png', mainImg:'./ImagesDiscover/discover-images-1.png',highesBid:'evenly',minimalImages:['./minimal-Images/rabbit.png','./minimal-Images/beard.png'], imgAvat:'./avators/fox.png'},
        {id:2,albumView:3 ,qauntityLike:20,albumName:'Life On Edena',artistName:'NebulaKid',imgProf:'./ImagesDiscover/ProfileArtist-Discover/Avatar Placeholder.png',mainImg:'./ImagesDiscover/discover-images-2.png',highesBid:'0.33 wETH',minimalImages:['./minimal-Images/rabbit.png','./minimal-Images/beard.png'], imgAvat:'./avators/fox.png'},
        {id:3,albumView:6 ,qauntityLike:80,albumName:'AstroFiction',artistName:'Spaceone',imgProf:'./ImagesDiscover/ProfileArtist-Discover/Avatar.png',mainImg:'./ImagesDiscover/discover-images-3.png',highesBid:'0.33 wETH',minimalImages:['./minimal-Images/rabbit.png','./minimal-Images/beard.png'], imgAvat:'./avators/fox.png'},
        {id:4,albumView:10 , qauntityLike:100, albumName:'Magic Mushrooms',artistName:'Shroomie', mainImg:'./ImagesDiscover/mashroom-image-trend.png', minimalImages:['./minimal-Images/mashroomMini.png','./minimal-Images/mashroomMini.png'],highesBid:'0.33 wETH', imgAvat:'./avators/humon.png'},
        {id:5,albumView:40 , qauntityLike:109, albumName:'Disco Machines',artistName:'BeKind2Robots' ,mainImg:'./ImagesDiscover/ironman-image-trend.png',minimalImages:['./minimal-Images/ironManMini.png','./minimal-Images/ironManMini.png'],highesBid:'0.33 wETH',imgAvat:'./avators/ironAvator.png'},
        {id:6,albumView:25 , qauntityLike:110, albumName:'DSGN Animals',artistName:'MrFox',mainImg:'./ImagesDiscover/dog-image-trend.png',minimalImages:['./minimal-Images/rabbit.png','./minimal-Images/beard.png'], imgAvat:'./avators/fox.png' ,highesBid:'0.33 wETH'},


    
    ]

}