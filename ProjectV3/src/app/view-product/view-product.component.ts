import {Component, Input, OnInit} from '@angular/core';
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
  @Input() product: Product;
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
    this.productsService.getProduct(id)
      .subscribe(product => this.product = product);
  }
  buyProduct() {

  }
  addToFav() {

  }
  addComment() {
    console.log(this.product.comments.length);
    const user = (document.getElementById('userName') as HTMLInputElement).value;
    const body = (document.getElementById('bodyCom') as HTMLTextAreaElement).value;
    this.product.comments.push({userName: user, body});
    console.log(this.product.comments.length);
    this.productsService.updateProduct(this.product).subscribe(
      product => this.product === product
    );
  }
}
