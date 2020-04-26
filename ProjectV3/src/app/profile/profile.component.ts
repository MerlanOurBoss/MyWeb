import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { User} from '../User';
import {UserServiceService} from '../user-service.service';
import { Location } from '@angular/common';
import {ProductService} from '../product.service';
import {Product} from '../Product';
import {Observable} from 'rxjs';
import {AuthorizationService} from '../authorization.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  likedBtn = 'Hide Liked Things';
  ordersBtn = 'Hide My Orders';
  user;
  instance: User;
  password;
  likedProducts;
  orderedProducts;
  showLiked = true; showOrders = true;
  constructor(
    private router: Router,
    private location: Location,
    private route: ActivatedRoute,
    private userService: UserServiceService,
    private productService: ProductService,
    private authorizationService: AuthorizationService
  ) { }

  ngOnInit(): void {
    if (!this.authorizationService.loggedIn()) {
      this.router.navigate(['/forall']);
    } else {
      this.user = localStorage.getItem('username');
      this.getProducts();
    }
  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.authorizationService.changeUserData(this.instance)
      .subscribe(() => this.goBack());
  }
  delete(prodId: number) {
    console.log(prodId);
    this.productService.deleteFromFav(prodId).subscribe(
      products => this.likedProducts = products
    );
  }
  getProducts() {
    this.authorizationService.getUserData().subscribe(
      user1 => this.instance = user1
    );
    this.authorizationService.getUserLikedProducts().subscribe(
      products => this.likedProducts = products
    );
    this.authorizationService.getUserOrderProducts().subscribe(
      products => this.orderedProducts = products
    );
  }
  liked() {
    if (this.showLiked === false) {
      this.showLiked = true;
      this.likedBtn = 'Hide Liked Things';
    } else {
      this.showLiked = false;
      this.likedBtn = 'Show Liked Things';
    }
  }
  ordered() {
    if (this.showOrders === false) {
      this.showOrders = true;
      this.ordersBtn = 'Hide Orders';
    } else {
      this.showOrders = false;
      this.ordersBtn = 'Show Orders';
    }
  }
}
