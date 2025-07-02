import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'', loadComponent:()=>import('./components/mu-home-page/mu-home-page.component').then(res=>res.MuHomePageComponent)}
];
