import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsWithApiService {

  constructor(private httpclient:HttpClient) { }

  getAllProducts():Observable<IProduct[]>{
    return this.httpclient.get<IProduct[]>(`http://localhost:3000/products`)
  }

  getProductById(productId:Number):Observable<IProduct[]>{
    return this.httpclient.get<IProduct[]>(`http://localhost:3000/products/${productId}`)
  }

  getAllcategories():Observable<IProduct[]>{
    return this.httpclient.get<IProduct[]>(`http://localhost:3000/categories`)
  }

  getCategoryById(categoryId:Number):Observable<IProduct[]>{
    return this.httpclient.get<IProduct[]>(`http://localhost:3000/categories/${categoryId}`)
  }

  getProductsByCategoryId(categoryId:Number):Observable<IProduct[]>{
    return this.httpclient.get<IProduct[]>(`http://localhost:3000/products?categoryId=${categoryId}`)
  }
}
