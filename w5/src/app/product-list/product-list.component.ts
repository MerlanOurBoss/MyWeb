import { Component, OnInit, Input } from '@angular/core';

import { CategoryService} from '../category.service';
import {Category} from '../Category';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  product = Product;
  constructor(private categoryService: CategoryService,
              private route: ActivatedRoute) {}
  ngOnInit() {
  }

  share(product) {
    window.open('https://telegram.me/share/url?url=' + product.url + '/&text=' + product.name);
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
