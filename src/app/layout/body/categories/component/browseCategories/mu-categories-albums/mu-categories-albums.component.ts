import { Component, inject, ViewEncapsulation } from '@angular/core';
import { MuImagesService } from '../../../../../../core/service/images/mu-images.service';

@Component({
  selector: 'app-mu-categories-albums',
  imports: [],
  templateUrl: './mu-categories-albums.component.html',
  styleUrl: './mu-categories-albums.component.css',
  encapsulation:ViewEncapsulation.None
})
export class MuCategoriesAlbumsComponent {
public imgsCategories = inject(MuImagesService)
}
