import { Component, DoCheck, effect, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MuMethodsServiceService } from '../../core/service/methods/mu-methods-service.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mu-header-page',
  imports: [RouterLink,CommonModule],
  templateUrl: './mu-header-page.component.html',
  styleUrl: './mu-header-page.component.css'
})
export class MuHeaderPageComponent{
public getIsLoginUser = inject(MuMethodsServiceService);
public isLogin = signal(false);
constructor(){
  effect(()=>{
    this.isLogin.set(this.getIsLoginUser.getIsLogin())
  })
}

}
