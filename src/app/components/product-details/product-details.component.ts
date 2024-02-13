import { Component, OnDestroy, OnInit } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { ProductsService } from '../../services/products.service';
import { ProductsWithApiService } from '../../services/products-with-api.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit  {

  prdID:number=0;
  product:IProduct|undefined=undefined;
  $event!: IProduct;
  productIdList: number[] = [];
  currentIndex: number = 0;


  constructor(public productService:ProductsService, private router:Router ,private activatedRoute: ActivatedRoute, private productWithApiService: ProductsWithApiService, private location: Location){}

  ngOnInit(): void {
    // this.prdID = (this.activatedRoute.snapshot.paramMap.get('id'))?Number(this.activatedRoute.snapshot.paramMap.get('id')):0;
    // this.product = this.productService.getProductById(this.prdID);
    
    this.productIdList = this.productService.getProductByIdList();
    this.activatedRoute.paramMap.subscribe( paramMap => {
      this.prdID = (paramMap.get('id'))?Number(paramMap.get('id')):0;
      this.product = this.productService.getProductById(this.prdID)

      this.productWithApiService.getProductById(this.prdID).subscribe({
        next:(data) => {

        }
      })
    })  
  }


  previousFun() {
    this.currentIndex = this.productIdList.indexOf(this.prdID)
    this.router.navigate(['/product', this.productIdList[--this.currentIndex]])
  }

  nextFun() {
    this.currentIndex = this.productIdList.indexOf(this.prdID)
    this.router.navigate(['/product', this.productIdList[++this.currentIndex]])
  }

  backFun() {
    this.location.back()
  }
}
