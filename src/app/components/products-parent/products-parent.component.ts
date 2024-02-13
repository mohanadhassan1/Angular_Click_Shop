import { Component } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { FormsModule } from '@angular/forms';
import { ImgStyleDirective } from '../../directives/img-style.directive';
import { DateDisplayPipe } from '../../pipes/date-display.pipe';
import { IProduct } from '../../models/iproduct';
import { ProductsService } from '../../services/products.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-parent',
  standalone: true,
  imports: [ProductsComponent, FormsModule, ImgStyleDirective, DateDisplayPipe, RouterModule, CommonModule],
  templateUrl: './products-parent.component.html',
  styleUrl: './products-parent.component.scss'
})
export class ProductsParentComponent {

  listFilterValue: string = '';

  constructor(public productService: ProductsService) {

  }


  cart: IProduct[] = [];
  count: { [productId: string]: number } = {};

  addToCart(product: IProduct) {
    const productId = product.id;
    if (this.count[productId] === undefined) {
      this.cart.push(product);
      this.count[productId] = 1;
    }
    else {
      this.count[productId]++;
    }
  }

  // countFun(product: IProduct) {
  //   const productId = product.id;
  //   if (this.count[productId] === undefined) {
  //     this.count[productId] = 1;
  //   }
  //   else {
  //     this.count[productId]++;
  //   }
  // }


  deleteProduct(productId: number) {
    const productIndex = this.cart.findIndex(item => item.id === productId);
    if (productIndex !== -1) {  
      this.cart.splice(productIndex, 1);
      delete this.count[productId];
    }
  }
}
