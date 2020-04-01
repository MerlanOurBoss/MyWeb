import { Injectable } from '@angular/core';
import { Product} from "./Product";
import {Category} from "./Category";
import { Observable, of } from 'rxjs';
// import {categories} from "./categories";
import { product } from "./Products";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  getProducts(): Observable<Product[]> {
    return of(product);
  }
  // getCategory(id: number): Observable<Category> {
  //   return of(categories[id]);
  // }
  // getProduct(id: number, id2: number): Observable<Product> {
  //   return of(categories[id].products[id2 - 1]);
  // }
}
