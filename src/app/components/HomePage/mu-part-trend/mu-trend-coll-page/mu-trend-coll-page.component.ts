import { Component, inject, OnInit } from '@angular/core';
import { MuImagesService } from '../../../../service/images/mu-images.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-mu-trend-coll-page',
  imports: [NgFor],
  templateUrl: './mu-trend-coll-page.component.html',
  styleUrl: './mu-trend-coll-page.component.css'
})
export class MuTrendCollPageComponent{
public img:string ='./images-trend-collection/mashroom.png';
public getImages = inject(MuImagesService);
}
