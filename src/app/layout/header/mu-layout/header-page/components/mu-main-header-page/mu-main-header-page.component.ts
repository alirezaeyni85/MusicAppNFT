import { Component, inject } from '@angular/core';
import { MuQuantityLoginedUsers} from '../../../../../../core/service/quantityUsers.service.ts/mu-quantity-of-logined-users.service';


@Component({
  selector: 'app-mu-main-header-page',
  imports: [],
  templateUrl: './mu-main-header-page.component.html',
  styleUrl: './mu-main-header-page.component.css'
})
export class MuMainHeaderPageComponent {
public astisticsArtists = inject(MuQuantityLoginedUsers)
constructor(){}
}
