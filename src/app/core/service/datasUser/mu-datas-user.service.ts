import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MuDatasUserService {

  constructor() { }
  public logedUserInformation = {
    name:'',
    email:'',
    password:'',
  }
  public setLogedUserInformation(name:string,email:string,password:string):void{
    this.logedUserInformation.name = name;
    this.logedUserInformation.email = email;
    this.logedUserInformation.password = password
  }
  public getLogedUserInformation():object{
    return this.logedUserInformation;
  }
}
