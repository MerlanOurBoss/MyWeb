import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Location } from '@angular/common';
import { ProductService } from '../product.service';
import { Product} from '../Product';
import {Observable, Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import {UserServiceService} from '../user-service.service';
import {AuthorizationService} from '../authorization.service';


@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  products$: Product[];
  // private searchTerms = new Subject<string>();
  term;

  constructor(
    private router: Router,
    private userServiceService: UserServiceService,
    private route: ActivatedRoute,
    private productsService: ProductService,
    private authorizationService: AuthorizationService,
    private location: Location
  ) {
  }


  // search(term: string): void {
  //   this.searchTerms.next(term);
  // }


  ngOnInit(): void {
    if (!this.authorizationService.loggedIn() || localStorage.getItem('username' ) !== 'admin') {
      this.router.navigate(['/sign/in']);
      // } else {
      //   this.products$ = this.searchTerms.pipe(
      //     // wait 300ms after each keystroke before considering the term
      //     debounceTime(300),
      //
      //     // ignore new term if same as previous term
      //     distinctUntilChanged(),
      //
      //     // switch to new search observable each time the term changes
      //     switchMap((term: string) => this.productsService.searchProducts(term)),
      //   );
    }

    this.getProducts();
  }

  getProducts(): void {
    this.productsService.getProducts()
      .subscribe(products => this.products$ = products);
  }
}
