import { Component, inject, OnInit, signal } from '@angular/core';
import { MuImagesService } from '../../../../service/images/mu-images.service';
import { NgFor } from '@angular/common';
import { MuToCreatorsComponent } from "../../creators/mu-to-creators/mu-to-creators.component";
import { ImagesTrendCollection } from '../../../../interface/images-trend-collection';

@Component({
  selector: 'app-mu-trend-coll-page',
  imports: [NgFor, MuToCreatorsComponent],
  templateUrl: './mu-trend-coll-page.component.html',
  styleUrl: './mu-trend-coll-page.component.css'
})
export class MuTrendCollPageComponent implements OnInit{
  public getImages:ImagesTrendCollection[]= inject(MuImagesService).imagesTrendCollection;
  public filterdTrendCollection =signal(this.getImages);
constructor(){}

ngOnInit(): void {
  this.filterdTrendCollection.set( [...this.getImages].sort((firstItem,secondItem)=>{
  return  (firstItem.qauntityLike - secondItem.qauntityLike);
}).reverse().slice(0,3))

}




}
