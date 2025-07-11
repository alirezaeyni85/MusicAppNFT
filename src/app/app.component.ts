import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MuHeaderPageComponent } from "./components/HomePage/mu-header-page/mu-header-page.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MuHeaderPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MusicAppNFT';
}
