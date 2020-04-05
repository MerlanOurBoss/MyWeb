import { Injectable } from '@angular/core';
import { Product} from './Product';
import {Category} from './Category';
import { Observable, of } from 'rxjs';
import {categories} from './categories';
import { products } from './Products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  getProducts(): Observable<Product[]> {
    return of(products);
  }
  getCategories(): Observable<Category[]> {
    return of(categories);
  }
  getCategoryProducts(): Observable<Product[]> {
    return of(products);
  }
  getProduct(id: number): Observable<Product[]> {
    return of(products.filter(product => product.id === id));
  }
  // getCategory(id: number): Observable<Category> {
  //   return of(categories[id]);
  // }
  // getProduct(id: number, id2: number): Observable<Product> {
  //   return of(categories[id].products[id2 - 1]);
  // }
}
