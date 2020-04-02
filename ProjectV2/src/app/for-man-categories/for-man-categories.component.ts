import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {Product} from '../Product';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-for-man-categories',
  templateUrl: './for-man-categories.component.html',
  styleUrls: ['./for-man-categories.component.css']
})
export class ForManCategoriesComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductService
  ) { }

  ngOnInit(): void {
    this.getProduct();
  }
  getProduct(): void {
    this.productsService.getProducts()
      .subscribe(products => this.products = products.filter(product => product.for === 1));
  }
}
