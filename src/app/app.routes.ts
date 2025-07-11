import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'', loadComponent:()=>import('./components/mu-home-page/mu-home-page.component').then(res=>res.MuHomePageComponent)},
    {path:'ranking', loadComponent:()=>import('./components/RankingPage/MainRankingPage/mu-main-ranking-page/mu-main-ranking-page.component').then(res=>res.MuMainRankingPageComponent)}
];
