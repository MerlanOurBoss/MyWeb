import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Product } from '../Product';
import { ProductService} from '../product.service';
import {UserServiceService} from '../user-service.service';
import {catchError} from 'rxjs/operators';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  @Input() product: Product;
  comments: Comment[];
  raw;
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductService,
    private location: Location,
    private userServiceService: UserServiceService
  ) { }

  ngOnInit(): void {
    this.getProduct();
  }
  getProduct(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productsService.getProduct(id)
      .subscribe(product => this.product = product);
    this.productsService.getComments(id)
      .subscribe(comments => this.comments = comments);
  }
  buyProduct() {
    this.productsService.addOrderProduct(this.product.id)
      .subscribe(anyth => this.raw = anyth);
    alert('Added to Orders ' + this.product.name);
  }
  addToFav() {
    this.productsService.addFavProduct(this.product.id)
      .subscribe(anyth => this.raw = anyth);
    alert('Added to Favourites ' + this.product.name);
  }
  addComment() {
    const body = (document.getElementById('bodyCom') as HTMLTextAreaElement).value;
    this.productsService.addComment(this.product.id, body).subscribe(
      comments => this.comments = comments
    );
    // this.product.comments.push({userName: user, body});
    // this.productsService.updateProduct(this.product).subscribe(
    //   product => this.product === product
    // );
    (document.getElementById('bodyCom') as HTMLTextAreaElement).value = '';
    // (document.getElementById('userName') as HTMLInputElement).value = '';
  }
}
