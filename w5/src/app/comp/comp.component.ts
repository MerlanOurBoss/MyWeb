import { Component, OnInit } from '@angular/core';
import {Category} from '../Category';
import {CategoryService} from '../category.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.css']
})
export class CompComponent implements OnInit {
  categories: Category[];

  constructor(private categoryService: CategoryService, private location: Location
  ) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.categoryService.getCategories()
      .subscribe(categories => this.categories = categories.slice(0, 4));
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  back() {
    this.location.back();
  }
}
