import { Routes } from '@angular/router';
import { MuAlbumMainPageComponent } from './features/album-page/main-album-page/mu-album-main-page/mu-album-main-page.component';
import { muAlbumArtistResolver } from './core/resolve/mu-album-artist.resolver';
import { MuNotFoundPageComponent } from './features/not-found/mu-not-found-page/mu-not-found-page.component';
import { MuLoginPageBodyComponent } from './features/login/mu-login-page-body/mu-login-page-body.component';

export const routes: Routes = [
    {path:'', loadComponent:()=>import('./layout/main-layout/mu-layout.component').then(res=>res.MuLayoutComponent)},
    {path:'ranking', loadComponent:()=>import('./features/creators/body/components/creatorsPage/MainRankingPage/mu-main-ranking-page/mu-main-ranking-page.component').then(res=>res.MuMainRankingPageComponent),resolve:{cretors:muAlbumArtistResolver}},
    {path:'artist/:id' , component:MuAlbumMainPageComponent,resolve:{albumData:muAlbumArtistResolver}},
    {path:'login', component:MuLoginPageBodyComponent},
    {path:'**',component:MuNotFoundPageComponent}
];
