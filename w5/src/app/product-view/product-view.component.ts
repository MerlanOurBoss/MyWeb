import { Component, OnInit, Input } from '@angular/core';
import {Product} from '../Product';
import {ActivatedRoute} from '@angular/router';
import {CategoryService} from '../category.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  @Input() product: Product;
  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getCategory();
  }

  getCategory(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    const id2 = +this.route.snapshot.paramMap.get('id2');
    this.categoryService.getProduct(id, id2).subscribe(product => this.product = product);
  }

  share(product) {
    window.open('https://telegram.me/share/url?url=' + product.link  + '/&text=' + product.name);
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  back() {
    this.location.back();
  }

}
