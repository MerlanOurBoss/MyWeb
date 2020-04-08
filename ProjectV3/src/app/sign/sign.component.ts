import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../product.service';
import { User} from '../User';
import {UserServiceService} from '../user-service.service';
import {Category} from '../Category';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {
  signIn = false;
  signUp = true;
  action = '';
  users: User[];
  constructor(
    private route: ActivatedRoute,
    private userService: UserServiceService
  ) { }

  ngOnInit(): void {
    this.getUsers();
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
    const logged = false;
    // this.user = this.userService.checkUser(login, pass);
  }
  registration() {
    const login = (document.getElementById('userName1') as HTMLInputElement).value;
    const pass = (document.getElementById('password1') as HTMLInputElement).value;
    console.log(login + ' ' + pass);
  }
  private getUsers() {
    this.getAction();
    console.log('get');
    this.userService.getUsers().subscribe(users => this.users === users);
    console.log('users');
    console.log(this.users.length);
  }
}
