import { Component, inject } from '@angular/core';
import { MuInfoCreatorsService } from '../../../../service/artists/mu-info-creators.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mu-to-creators',
  imports: [RouterLink],
  templateUrl: './mu-to-creators.component.html',
  styleUrl: './mu-to-creators.component.css'
})
export class MuToCreatorsComponent {
public getCreators = inject(MuInfoCreatorsService).infoCreators.slice(0,12);
}
