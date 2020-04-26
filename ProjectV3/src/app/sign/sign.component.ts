import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../product.service';
import { User} from '../User';
import {UserServiceService} from '../user-service.service';
import {Category} from '../Category';
import {tap} from 'rxjs/operators';
import {AuthorizationService} from '../authorization.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {
  signIn = false;
  signUp = true;
  action = '';
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserServiceService,
    private productService: ProductService,
    private authorizationService: AuthorizationService
  ) { }

  ngOnInit(): void {
    if (this.authorizationService.loggedIn()) {
      this.router.navigate(['/forall']);
    } else {
      this.getAction();
    }
  }
  getAction() {
    this.action = this.route.snapshot.params.action;
    if (this.action === 'in') {
      this.signIn = true;
      this.signUp = false;
    } else {
      this.signUp = true;
      this.signIn = false;
    }
  }
  signInAction() {
    this.signIn = true;
    this.signUp = false;
  }
  signUpAction() {
    this.signUp = true;
    this.signIn = false;
  }
  logIn() {
    const login = (document.getElementById('userName') as HTMLInputElement).value;
    const pass = (document.getElementById('password') as HTMLInputElement).value;
    const user = {
      username: login,
      password: pass
    };
    this.authorizationService.loginUser(user)
      .subscribe(
        response => {
          localStorage.setItem('token', response.token);
          localStorage.setItem('id', response.id);
          localStorage.setItem('username', response.username);
          this.router.navigate(['/forall']);
        },
        error => console.log(error)
      );
  }
  registration() {
    const login = (document.getElementById('userName1') as HTMLInputElement).value;
    const pass = (document.getElementById('password1') as HTMLInputElement).value;
    const user = {
      username: login,
      password: pass
    };
    this.authorizationService.registerUser(user)
      .subscribe(
        response => {
          alert('Sign in to Your Account');
          this.router.navigate(['/sign/in']);
          console.log(response);
        },
        error => console.log(error)
      );
    // this.userService.addUser({login, pass} ).subscribe(user => this.users.push(user));
    // console.log(this.userService.getUser(7));
  }
}
