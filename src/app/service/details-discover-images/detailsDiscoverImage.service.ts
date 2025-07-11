import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class DetailsDiscoverImage {

    public infoesImagesDiscover:any[] =[
        {id:1,title:'Distant Galaxy',textProf:'MoonDancer',imgProf:'./ImagesDiscover/ProfileArtist-Discover/Asset 12 2.png', img:'./ImagesDiscover/Image Placeholder.png',highesBid:'evenly'},
        {id:2,title:'Life On Edena',textProf:'NebulaKid',imgProf:'./ImagesDiscover/ProfileArtist-Discover/Avatar Placeholder.png',img:'./ImagesDiscover/Image Placeholder-1.png',highesBid:'0.33 wETH'},
        {id:3,title:'AstroFiction',textProf:'Spaceone',imgProf:'./ImagesDiscover/ProfileArtist-Discover/Avatar.png',img:'./ImagesDiscover/Image Placeholder-2.png',highesBid:'0.33 wETH'},
    ]

}