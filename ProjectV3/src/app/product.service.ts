import { Injectable } from '@angular/core';
import { Product} from './Product';
import {Category} from './Category';
import { Observable, of } from 'rxjs';
// import { products } from './Products';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserServiceService} from './user-service.service';
import {catchError, map, tap} from 'rxjs/operators';
import {User} from './User';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  BASE_URL = 'http://localhost:8000';
  private productsUrl = 'api/products';
  private usersUrl = 'users';
  private categoriesUrl = 'api/categories';
  private commentsUrl = 'api/comments';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(
    private http: HttpClient,
    private userServiceService: UserServiceService,
    private route: Router
  ) { }
  getProducts(): Observable<Product[]> {
    console.log('fetched Products' + ' ' + this.BASE_URL + '/' + this.productsUrl);
    return this.http.get<Product[]>(this.BASE_URL + '/' + this.productsUrl);
  }
  getCategories(): Observable<Category[]> {
    console.log('fetched Categories');
    return this.http.get<Category[]>(`${this.BASE_URL}/${this.categoriesUrl}`);
  }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }
  getCategoryProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);
  }
  getProduct(id: number): Observable<Product> {
    console.log('Fetched Product');
    const url = `${this.productsUrl}/${id}`;
    return this.http.get<Product>(`${this.BASE_URL}/${this.productsUrl}/${id}`);
  }
  // updateProduct(product: Product): Observable<any> {
  //   return this.http.put(`${this.BASE_URL}/${this.productsUrl}`, product, this.httpOptions).pipe(
  //     tap(_ => console.log(`updated product id=${product.id}`)),
  //     catchError(this.handleError<any>('update Product'))
  //   );
  // }
  updateProduct(product: Product, id: number): Observable<any> {
    return this.http.put('http://127.0.0.1:8000/api/products/edit/' + id, product, this.httpOptions).pipe(
      tap(_ => alert('updated product = ' +  product.name)),
    catchError(this.handleError<any>('Can not update product'))
  );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      alert(error.error.Error); // log to console instead
      console.log(error.error.Error);
      if (error.error.Error === 'Authorize first') {
        this.route.navigate(['/sign/in']);
      }
      return of(result as T);
    };
  }
  searchProducts(term: string): Observable<Product[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Product[]>(`${this.productsUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        console.log(`found product matching "${term}"`) :
        console.log(`no product matching "${term}"`)),
    );
  }
  getComments(id: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.BASE_URL + '/api/product/' + id + '/comments');
  }
  addComment(prodId: number, body: string): Observable<Comment[]> {
    return this.http.post<Comment[]>(this.BASE_URL + '/api/product/' + prodId + '/comments',
      {body, username: localStorage.getItem('username')}, this.httpOptions).pipe(
      catchError(this.handleError<any>('Comment adding'))
    );
  }
  addFavProduct(prodid) {
    console.log(this.BASE_URL + '/users/fav');
    return this.http.post<any>(this.BASE_URL + '/users/fav', {product : prodid}).pipe(
      catchError(this.handleError<any>('Favourite Product adding'))
    );
  }
  addOrderProduct(prodid) {
    console.log(this.BASE_URL + '/users/fav');
    return this.http.post<any>(this.BASE_URL + '/users/order', {product : prodid}).pipe(
      catchError(this.handleError<any>('Ordered Product adding'))
    );
  }
  deleteFromFav(prodid) {
    return this.http.post<any>(this.BASE_URL + '/users/delete/fav', {product : prodid}).pipe(
      tap(_ => console.log('Deleted from Favourites')),
      catchError(this.handleError<any>('Favourite Product deleting'))
    );
  }
}
