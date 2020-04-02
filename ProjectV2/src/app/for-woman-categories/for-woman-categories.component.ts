import { Component, OnInit } from '@angular/core';
import {Product} from '../Product';
import {ProductService} from '../product.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-for-woman-categories',
  templateUrl: './for-woman-categories.component.html',
  styleUrls: ['./for-woman-categories.component.css']
})
export class ForWomanCategoriesComponent implements OnInit {
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
      .subscribe(products => this.products = products.filter(product => product.for === 2));
  }
}
