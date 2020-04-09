import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { User} from '../User';
import {UserServiceService} from '../user-service.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;

  constructor(
    private router: Router,
    private location: Location,
    private route: ActivatedRoute,
    private userService: UserServiceService,
  ) { }

  ngOnInit(): void {
    this.userService.getLoggedStatus().subscribe(user => this.user = user);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.userService.updateUser(this.user).subscribe(() => this.goBack());
  }

  delete(liked: number): void {

    if (!liked) {return; }
    this.userService.deleteProduct({liked} as unknown as User)
      .subscribe();
    // const liked = (document.getElementById('userName1') as HTMLInputElement).valueAsNumber;
    // this.userService.deleteProduct({liked}).subscribe(user => this.user = user);

  }
}
