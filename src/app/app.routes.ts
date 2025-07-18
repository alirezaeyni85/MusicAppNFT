import { Routes } from '@angular/router';
import { MuAlbumMainPageComponent } from './features/album-page/main-album-page/mu-album-main-page/mu-album-main-page.component';

export const routes: Routes = [
    {path:'', loadComponent:()=>import('./layout/main-layout/mu-layout.component').then(res=>res.MuLayoutComponent)},
    {path:'ranking', loadComponent:()=>import('./features/creators/body/components/creatorsPage/MainRankingPage/mu-main-ranking-page/mu-main-ranking-page.component').then(res=>res.MuMainRankingPageComponent)},
    {path:'artist/:id' , component:MuAlbumMainPageComponent,}
];
