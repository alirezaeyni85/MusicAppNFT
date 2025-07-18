import { Component } from '@angular/core';
import { MuHeaderRankingComponent } from "../../header-Ranking/mu-header-ranking/mu-header-ranking.component";
import { MuMainContentCreatorsComponent } from '../../main-content-creators/mu-main-content-creators/mu-main-content-creators.component';

@Component({
  selector: 'app-mu-main-ranking-page',
  imports: [MuHeaderRankingComponent, MuMainContentCreatorsComponent],
  templateUrl: './mu-main-ranking-page.component.html',
  styleUrl: './mu-main-ranking-page.component.css'
})
export class MuMainRankingPageComponent {

}
