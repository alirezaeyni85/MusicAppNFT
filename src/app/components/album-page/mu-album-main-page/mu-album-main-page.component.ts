import { Component } from '@angular/core';
import { MuPartInfoComponent } from "../mu-part-info/mu-part-info.component";
import { MuTimeDiscountComponent } from "../mu-time-discount/mu-time-discount.component";

@Component({
  selector: 'app-mu-album-main-page',
  imports: [MuPartInfoComponent, MuTimeDiscountComponent],
  templateUrl: './mu-album-main-page.component.html',
  styleUrl: './mu-album-main-page.component.css'
})
export class MuAlbumMainPageComponent {

}
