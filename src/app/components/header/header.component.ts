import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { UserAuthenticationService } from '../../services/user-authentication.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{

  listFilterValue: string = '';

  userLog:boolean;

  constructor(public productService:ProductsService, private userAuth: UserAuthenticationService ) {
    this.userLog = this.userAuth.isUserLogged;
  }

  ngOnInit(): void {
    this.userAuth.getUserStatus().subscribe({
      next:(user)=>{
        this.userLog = user
        console.log(user);
        
      }
    })
  } 

}


