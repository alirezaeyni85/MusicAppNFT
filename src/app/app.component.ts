import { Component } from '@angular/core';
import { MuLayoutComponent } from './layout/main-layout/mu-layout.component';
import { RouterOutlet } from '@angular/router';
import { MuHeaderPageComponent } from "./features/mu-header-page/mu-header-page.component";



@Component({
  selector: 'app-root',
  imports: [MuLayoutComponent, RouterOutlet, MuHeaderPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MusicAppNFT';

}
