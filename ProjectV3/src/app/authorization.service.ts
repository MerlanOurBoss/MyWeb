import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {User} from "./User";

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  private loginUrl = 'http://127.0.0.1:8000/auth/';
  private usersUrl = 'http://127.0.0.1:8000/users/';
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  registerUser(user): Observable<any> {
    return this.http.post(this.usersUrl, user);
  }

  loginUser(user): Observable<any> {
    return this.http.post(this.loginUrl, user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  logoutUser() {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    this.router.navigate(['/']);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getUserId() {
    return localStorage.getItem('id');
  }

  getUserData() {
    const id = this.getUserId();
    return this.http.get<User>('http://localhost:8000/user/' + id);
  }
  addFavProduct(prodid) {
    return this.http.post('http://localhost:8000/users/favourite/' + prodid, {});
  }

  changeUserData(user) {
    const id = this.getUserId();
    localStorage.setItem('username', user.login);
    return this.http.put('http://localhost:8000/user/' + id, user);
  }
  getUserLikedProducts() {
    return this.http.get('http://localhost:8000/users/fav');
  }
  getUserOrderProducts() {
    return this.http.get('http://localhost:8000/users/order');
  }
}
