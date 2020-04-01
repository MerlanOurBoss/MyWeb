import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {
  ids = ' ';
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getCategoryProducts();
  }

  getCategoryProducts(){
    const prevCat = +this.route.snapshot.paramMap.get('prevCat'); // 1 = man, 2 = woman
    const catId = +this.route.snapshot.paramMap.get('catId'); // man or woman's category id
    this.ids += prevCat + ' ' + catId;
  }



}
