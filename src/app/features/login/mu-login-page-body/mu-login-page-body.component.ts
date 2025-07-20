import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MuMethodsServiceService } from '../../../core/service/methods/mu-methods-service.service';
import { Router } from '@angular/router';
import { MuDatasUserService } from '../../../core/service/datasUser/mu-datas-user.service';

@Component({
  selector: 'app-mu-login-page-body',
  imports: [ReactiveFormsModule],
  templateUrl: './mu-login-page-body.component.html',
  styleUrl: './mu-login-page-body.component.css'
})
export class MuLoginPageBodyComponent {
  
  public router = inject(Router);
  public userData = inject(MuDatasUserService)
  public isLoginUser = inject(MuMethodsServiceService);

 public loginFormGroup = new FormGroup({
  firstName:new FormControl('',[Validators.required]),
  email:new FormControl('',[Validators.required,Validators.email]),
  password:new FormControl('',[Validators.minLength(8),Validators.required]),
  confirmPasswrod:new FormControl('',[Validators.minLength(8),Validators.required])
 })

onSubmit(){
  if(this.loginFormGroup.valid){
    const getDataFromForm = this.loginFormGroup.value;
    this.userData.setLogedUserInformation(getDataFromForm.firstName!,getDataFromForm.email!,getDataFromForm.password!)
    this.isLoginUser.setIsLogin();
    this.router.navigate([''])
  }


}


}
