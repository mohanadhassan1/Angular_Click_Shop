import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { ICategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ImgStyleDirective } from '../../directives/img-style.directive';
import { DateDisplayPipe } from '../../pipes/date-display.pipe';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProductsWithApiService } from '../../services/products-with-api.service';
import { Subscription } from 'rxjs';
import { AddProductService } from '../../services/add-product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FormsModule, CommonModule, ImgStyleDirective, DateDisplayPipe, RouterModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit, OnDestroy {


  products: IProduct[] = [];
  productList: IProduct[] = [];
  categoryList: ICategory[] = [];
  filterProduct: IProduct[] = [];
  productListFilter: IProduct[] = [];

  @Input() set setListInChild(val: string) {
    this.productListFilter = this.productService.selectFun(val);
  }

  @Input() set searchByPriceInChild(val: string) {
    this.productListFilter = this.productService.searchByPrice(val);
  }


  @Output() addPrdsEvent = new EventEmitter<IProduct>();

  constructor(private route: ActivatedRoute, public productService: ProductsService, private router: Router, public addProduct: AddProductService, private productWithApiService: ProductsWithApiService) { }

  clientName: string = "Mohanad";
  sub !: Subscription;

  ngOnInit() {
    this.productListFilter = this.productService.productListFun();
    this.sub = this.productWithApiService.getAllProducts().subscribe({
      next: (data) => {
        this.productListFilter = data;
      },
      error: (err) => {

      }
    })

    this.addProduct.getProducts().subscribe(products => {
      this.products = products;
    });



    // const productId = this.route.snapshot.paramMap.get('productId');
    // this.editProduct(productId).subscribe(product => {
    //   this.product = product;
    // });

    // this.route.paramMap.subscribe(params => {
    //   const productIdString = params.get('productId');
    //   if (productIdString) {
    //     const productId = +productIdString; // Convert to number
    //     this.addProduct.getProduct(productId).subscribe({
    //       next: (product: IProduct) => {
    //         this.product = product;
    //       },
    //       error: (error: any) => {
    //         console.error('Error fetching product details:', error);
    //         // Handle error as needed
    //       }
    //     });
    //   } else {
    //     // Handle the case where productId is null
    //   }
    // });

  }

  // ngOnInit(): void {
  //   // const productIdS = this.route.snapshot.paramMap.get('productId');
  //   // this.addProductService.getProduct(productId).subscribe(product => {
  //   //   this.product = product;
  //   // });

  //   // this.route.paramMap.subscribe(params => {
  //   //   const productIdString = params.get('productId');
  //   //   if (productIdString) {
  //   //     const productId = +productIdString; // Convert to number
  //   //     this.addProductService.getProduct(productId).subscribe({
  //   //       next: (product: IProduct) => {
  //   //         this.product = product;
  //   //       },
  //   //       error: (error: any) => {
  //   //         console.error('Error fetching product details:', error);
  //   //         // Handle error as needed
  //   //       }
  //   //     });
  //   //   } else {
  //   //     // Handle the case where productId is null
  //   //   }
  //   // });
  // }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

  productDetails(prdID: number) {
    this.router.navigate(['/product', prdID])
  }


  addToCart(prd: IProduct) {
    this.addPrdsEvent.emit(prd);
  }

  handleClick(event: Event, prd: IProduct) {
    event.stopPropagation()
    this.addToCart(prd)
    this.productService.buyFun(prd)
  }


  updateProduct(productId: Number, updateProduct: IProduct): void {

    this.addProduct.editProduct(productId, updateProduct).subscribe({
      next: (product) => {
        product.name = updateProduct.name;
        product.price = updateProduct.price;
        product.quantity = updateProduct.quantity;
        this.router.navigate(["products"]);
        // alert("success")
      },
      error: (error: any) => {
        console.error('Error fetching product details:', error);
      }
      // this.router.navigate(["admin/insertproduct/", productId], { state: { product: product } });
      // console.log(productId);
    })
  }


  isFormVisible: boolean = false;
  editProductToggle(event: Event, prd: number) {
    event.stopPropagation()
    if (prd) {
      this.isFormVisible = !this.isFormVisible;
    }
  }



  deleteProduct(event: Event, productId: IProduct): void {
    event.stopPropagation()
    // event.preventDefault()
    this.addProduct.deleteProduct(productId).subscribe(product => {
      this.router.navigate(["products"], { state: { product: product } });
    });
  }

}