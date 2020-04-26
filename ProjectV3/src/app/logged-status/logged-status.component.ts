import { Component, OnInit } from '@angular/core';
import {User} from '../User';
import {UserServiceService} from '../user-service.service';
import {Router} from '@angular/router';
import { Location } from '@angular/common';
import {AuthorizationService} from '../authorization.service';

@Component({
  selector: 'app-logged-status',
  templateUrl: './logged-status.component.html',
  styleUrls: ['./logged-status.component.css']
})
export class LoggedStatusComponent implements OnInit {
  activeUser;
  admin: boolean;
  constructor(
    private router: Router,
    private userServiceService: UserServiceService,
    private location: Location,
    private authorizationService: AuthorizationService
  ) { }

  ngOnInit(): void {
    if (this.authorizationService.loggedIn()) {
      this.activeUser = localStorage.getItem('username');
      console.log(this.activeUser);
    }
    if (this.activeUser === 'admin') {
      this.admin = true;
    }
  }
  logOut() {
    this.authorizationService.logoutUser();
    this.location.back();
  }
}
