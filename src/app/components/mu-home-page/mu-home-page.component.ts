import { Component } from '@angular/core';
import { MuHeaderPageComponent } from "../HomePage/mu-header-page/mu-header-page.component";
import { MuMainHeaderPageComponent } from "../HomePage/mu-main-header-page/mu-main-header-page.component";
import { MuTrendCollPageComponent } from "../HomePage/mu-part-trend/mu-trend-coll-page/mu-trend-coll-page.component";
import { MuToCreatorsComponent } from "../creators/mu-to-creators/mu-to-creators.component";

@Component({
  selector: 'app-mu-home-page',
  imports: [MuHeaderPageComponent, MuMainHeaderPageComponent, MuTrendCollPageComponent, MuToCreatorsComponent],
  templateUrl: './mu-home-page.component.html',
  styleUrl: './mu-home-page.component.css'
})
export class MuHomePageComponent {

}
