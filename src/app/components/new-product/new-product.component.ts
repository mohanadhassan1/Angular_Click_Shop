import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { AddProductService } from '../../services/add-product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-product',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.scss'
})

export class NewProductComponent{
  
  product!: IProduct;
  newProduct: IProduct = {} as IProduct;

  constructor(private addProductService: AddProductService , private router: Router) { }

  
  
  addProduct() {
    this.addProductService.addNewProduct(this.newProduct).subscribe({
    // this.addProductService.addNewProduct(newProduct).subscribe({
      next:(data) => {
        console.log(data);
        this.router.navigate(["products"])
      },
      error:(error) => {
        console.log(error);  
      }
    })
  }
  
}