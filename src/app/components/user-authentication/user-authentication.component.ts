import { Component } from '@angular/core';
import { UserAuthenticationService } from '../../services/user-authentication.service';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AddProductService } from '../../services/add-product.service';
import { IUser } from '../../models/iuser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-authentication',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-authentication.component.html',
  styleUrl: './user-authentication.component.scss'
})
export class UserAuthenticationComponent {

  isUser: boolean = true;

  formGroup: FormGroup;

  constructor(private userAuth: UserAuthenticationService, private formbuilder: FormBuilder, private addProductService: AddProductService, private router: Router){
    this.formGroup = this.formbuilder.group({

      email: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$")]],
      password: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9 .-_@!#$%^&*]{6,}$")]],
    })
  }


  loginFun() {
    this.userAuth.login("mohanad@gmail.com","123456")
    this.isUser = this.userAuth.isUserLogged;
  }

  logoutFun() {
    this.userAuth.logout()
    this.isUser = this.userAuth.isUserLogged;
  }


  get email() {
    return this.formGroup.get('email');
  }
  get password() {
    return this.formGroup.get('password');
  }
  
}

