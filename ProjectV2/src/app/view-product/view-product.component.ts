import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Product } from '../Product';
import { ProductService} from '../product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  products = [];

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getProduct();
  }
  getProduct(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productsService.getProduct()
      .subscribe(products => this.products = products.filter(product => product.id === id));
  }
}
