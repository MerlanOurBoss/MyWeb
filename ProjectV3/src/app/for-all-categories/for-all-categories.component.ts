import { Component, OnInit, Input } from '@angular/core';
import {ProductService} from "../product.service";
import {Product} from "../Product";

@Component({
  selector: 'app-for-all-categories',
  templateUrl: './for-all-categories.component.html',
  styleUrls: ['./for-all-categories.component.css']
})
export class ForAllCategoriesComponent implements OnInit {
  products: Product[] = [];

  constructor(private productsService: ProductService ) { }

  ngOnInit(): void {
    this.getProduct();
  }
  getProduct(): void {
     this.productsService.getProducts()
       .subscribe(products => this.products = products);
  }
}
