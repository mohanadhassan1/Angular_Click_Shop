import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';
import { Observable } from 'rxjs';
import { IUser } from '../models/iuser';

@Injectable({
  providedIn: 'root'
})
export class AddProductService {

  http={}

  constructor(private httpClient: HttpClient) {
    this.http = {
      Headers: new HttpHeaders({'Content-Type':'application/json'})
    }
  }

  addNewProduct(product:IProduct):Observable<IProduct>{
    return this.httpClient.post<IProduct>(`http://localhost:3000/products`,JSON.stringify(product),this.http);
  }
  
  editProduct(productId:Number, updateProduct:IProduct):Observable<IProduct>{
    // return this.httpClient.patch<IProduct>(`http://localhost:3000/products/${product.id}`, product);
    return this.httpClient.patch<IProduct>(`http://localhost:3000/products/${productId}`,JSON.stringify(updateProduct),this.http);
  }
  
  getProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>('http://localhost:3000/products');
  }

  getProduct(product: IProduct): Observable<IProduct> {
    return this.httpClient.get<IProduct>(`http://localhost:3000/products/${product.id}`);
  }
  
  deleteProduct(product: IProduct): Observable<IProduct> {
    return this.httpClient.delete<IProduct>(`http://localhost:3000/products/${product.id}`);
  }
  
  addNewUser(user:IUser):Observable<IUser>{
    return this.httpClient.post<IUser>(`http://localhost:3000/users`,JSON.stringify(user),this.http);
  }
}
