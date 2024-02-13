import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AddProductService } from '../../services/add-product.service';
import { IUser } from '../../models/iuser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-reactive',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './user-reactive.component.html',
  styleUrl: './user-reactive.component.scss'
})
export class UserReactiveComponent {

  newUser: IUser = {} as IUser;
  formGroup: FormGroup;

  constructor(private formbuilder: FormBuilder, private addProductService: AddProductService, private router: Router) {

    this.formGroup = this.formbuilder.group({

      fullName: ['', [Validators.required, Validators.pattern("[A-Za-z ]{5,}")]],
      email: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$")]],
      password: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9 .-_@!#$%^&*]{6,}$")]],
      mobileNumber: this.formbuilder.array([]),
      address: this.formbuilder.array([])
      // confirmPassword:['', [Validators.required]]

    })
  }

  get fullName() {
    return this.formGroup.get('fullName');
  }
  get email() {
    return this.formGroup.get('email');
  }
  get password() {
    return this.formGroup.get('password');
  }
  get mobileNumber() {
    return this.formGroup.get('mobileNumber') as FormArray;
  }
  get address() {
    return this.formGroup.get('address') as FormArray;
  }


  newMobile() :FormGroup{
    return this.formbuilder.group({
      phone: ['', [Validators.required, Validators.pattern("^\\d{10}$")]],
    })
  }

  addMobile() {

    this.mobileNumber.push(this.newMobile())
  }

  removeMobile(i: number) {
    this.mobileNumber.removeAt(i);
  }



  newAddress(): FormGroup {
    return this.formbuilder.group({
      city: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9 -._]{2,}$")]],
      street: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9 -._]{2,}$")]]
    })
  }

  addAddress() {
    this.address.push(this.newAddress())
  }

  removeAddress(i: number) {
    this.address.removeAt(i);
  }



  addUser() {
    if (this.formGroup.valid) {
      this.newUser = this.formGroup.value;
      this.addProductService.addNewUser(this.newUser).subscribe({
        next: (data) => {
          console.log(data);
          this.router.navigate(["products"])
        },
        error: (error) => {
          console.log(error);
        }
      })
    }
  }
}
