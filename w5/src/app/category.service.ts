import { Injectable } from '@angular/core';
import { Category} from './Category';
import { Product} from './Product';
import { categories } from './categories';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }
  getCategories(): Observable<Category[]> {
    return of(categories);
  }
  getCategory(id: number): Observable<Category> {
    return of(categories[id]);
  }
  getProduct(id: number, id2: number): Observable<Product> {
    return of(categories[id].products[id2 - 1]);
  }
}
