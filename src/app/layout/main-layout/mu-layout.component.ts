import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MuHeaderPageComponent } from '../../features/mu-header-page/mu-header-page.component';
import { MuCategoriesAlbumsComponent } from "../body/categories/component/browseCategories/mu-categories-albums/mu-categories-albums.component";
import { MuMainHeaderPageComponent } from "../header/mu-layout/header-page/components/mu-main-header-page/mu-main-header-page.component";
import { MuMainBodyComponent } from "../body/mu-main-body/mu-main-body.component";

@Component({
  selector: 'app-mu-layout',
  imports: [RouterOutlet, MuHeaderPageComponent, MuCategoriesAlbumsComponent, MuMainHeaderPageComponent, MuMainBodyComponent],
  templateUrl: './mu-layout.component.html',
  styleUrl: './mu-layout.component.css'
})
export class MuLayoutComponent {

}
