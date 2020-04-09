import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProductService } from '../product.service';
import { Product} from '../Product';
import {Observable, Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap} from "rxjs/operators";


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  products$: Observable<Product[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductService,
    private location: Location
  ) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }
  ngOnInit(): void {
    this.products$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.productsService.searchProducts(term)),
    );
  }
  //
  // getProduct(): void {
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   this.productsService.getProduct(id)
  //     .subscribe(product => this.product = product);
  // }


}
