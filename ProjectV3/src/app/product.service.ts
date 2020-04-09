import { Injectable } from '@angular/core';
import { Product} from './Product';
import {Category} from './Category';
import { Observable, of } from 'rxjs';
// import { products } from './Products';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserServiceService} from './user-service.service';
import {catchError, map, tap} from 'rxjs/operators';
import {User} from './User';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsUrl = 'api/products';
  private usersUrl = 'api/users';
  private categoriesUrl = 'api/categories';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(
    private http: HttpClient,
  ) { }
  getProducts(): Observable<Product[]> {
    console.log('fetched Products');
    return this.http.get<Product[]>(this.productsUrl);
  }
  getCategories(): Observable<Category[]> {
    console.log('fetched Categories');
    return this.http.get<Category[]>(this.categoriesUrl);
  }
  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.usersUrl);
  }
  getCategoryProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);
  }
  getProduct(id: number): Observable<Product> {
    console.log('Fetched Product');
    const url = `${this.productsUrl}/${id}`;
    return this.http.get<Product>(url);
  }
  updateProduct(product: Product): Observable<any> {
    return this.http.put(this.productsUrl, product, this.httpOptions).pipe(
      tap(_ => console.log(`updated product id=${product.id}`)),
      catchError(this.handleError<any>('update Product'))
    );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }
}
