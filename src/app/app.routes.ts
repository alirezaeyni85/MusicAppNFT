import { Routes } from '@angular/router';
import { MuAlbumMainPageComponent } from './components/album-page/mu-album-main-page/mu-album-main-page.component';

export const routes: Routes = [
    {path:'', loadComponent:()=>import('./components/mu-home-page/mu-home-page.component').then(res=>res.MuHomePageComponent)},
    {path:'ranking', loadComponent:()=>import('./components/creatorsPage/MainRankingPage/mu-main-ranking-page/mu-main-ranking-page.component').then(res=>res.MuMainRankingPageComponent)},
    {path:'artist/:id', component:MuAlbumMainPageComponent}
];
