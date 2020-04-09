import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {User} from './User';
import {catchError, tap} from 'rxjs/operators';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private usersUrl = 'api/users';
  activeUser: User;
  users: User[];
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }
  getUser(id: number): Observable<User> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.get<User>(url);
  }
  updateUser(user: User): Observable<any> {
    return this.http.put(this.usersUrl, user, this.httpOptions)
      .pipe(tap( _ => this.log(`user was updated `)),
      );
  }
  deleteProduct(user: User | number): Observable<any> {
    const id = typeof user === 'number' ? user : user.id;
    return this.http.delete(this.usersUrl, this.httpOptions)
      .pipe(tap( _ => this.log(`product was deleted id=${id} `)),
      );
  }
  addUser(user: User): Observable<User> {
    return this.http.post(this.usersUrl, user, this.httpOptions)
      .pipe(tap((newUser: User) => this.log(`added user w/ id=${newUser.id}`)),
      );
  }
  checkUser(login: string, password: string) {
    this.getUsers().subscribe(users => this.users = users);
    for (const us of this.users) {
      if (us.login === login && us.password === password) {
        this.activeUser = us;
      }
    }
    return this.activeUser;
  }
  private log(fetchedUsers: string) {
    console.log(fetchedUsers);
  }
  getLoggedStatus(): Observable<User> {
    return of(this.activeUser);
  }
  getStatus() {
    if (this.activeUser) {
      return true;
    } else {
      return false;
    }
  }
  logOut() {
    this.activeUser = null;
  }
  addToFav(prodId: number) {
    let find = false;
    if (this.activeUser) {
      for (const prodId2 of this.activeUser.liked){
        if (prodId === prodId2) {
          find = true;
        }
      }
      if (!find) {
        this.activeUser.liked.push(prodId);
        this.updateUser(this.activeUser);
      }
      return true;
    } else {
      console.log('not logged in');
      this.router.navigate(['sign/in']);
      return false;
    }
  }
  removeFav(prodId: number){
    this.activeUser.liked = this.activeUser.liked.filter(id => prodId !== id);
    this.updateUser(this.activeUser);
  }
}
