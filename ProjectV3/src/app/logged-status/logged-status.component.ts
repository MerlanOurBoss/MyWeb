import { Component, OnInit } from '@angular/core';
import {User} from '../User';
import {UserServiceService} from '../user-service.service';

@Component({
  selector: 'app-logged-status',
  templateUrl: './logged-status.component.html',
  styleUrls: ['./logged-status.component.css']
})
export class LoggedStatusComponent implements OnInit {
  activeUser: User;
  constructor(
    private userServiceService: UserServiceService
  ) { }

  ngOnInit(): void {
    this.userServiceService.getLoggedStatus().subscribe(user => this.activeUser = user);
  }

}
