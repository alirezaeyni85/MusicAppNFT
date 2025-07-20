import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MuMethodsServiceService {

  constructor() { }
  public  isLogin = signal(false);
  
  public setIsLogin():void{
     this.isLogin.set(true);
  }
  public getIsLogin():boolean{
    return this.isLogin();
  }
}
