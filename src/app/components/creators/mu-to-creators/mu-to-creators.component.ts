import { Component, inject } from '@angular/core';
import { MuInfoCreatorsService } from '../../../service/infoes-creators/mu-info-creators.service';

@Component({
  selector: 'app-mu-to-creators',
  imports: [],
  templateUrl: './mu-to-creators.component.html',
  styleUrl: './mu-to-creators.component.css'
})
export class MuToCreatorsComponent {
public getCreators = inject(MuInfoCreatorsService);
}
