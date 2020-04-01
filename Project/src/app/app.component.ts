import { Component } from '@angular/core';
import {Category} from './Category';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App';
  categories: Category[] = [];
  prevCatId = -1;
  mouseEnter(id) {
    this.mouseLeave();
    if (id === 1) {
      this.prevCatId = 1;
      // this.categories.push({id: 1, name: 'man1'}, {id: 2, name: 'man2'});
    } else if (id === 2) {
      this.prevCatId = 2;
      // this.categories.push({id: 1, name: 'woman1'}, {id: 2, name: 'woman2'});
    }
    document.querySelector('div').style.cssText = 'background-color: rgba(0,0,0,0.5);';
    document.getElementById('nav_list').style.cssText = 'background-color: rgba(0,0,0,0.5);';
  }
  mouseLeave() {
    this.categories = [];
    document.querySelector('div').style.cssText = 'background-color: none;';
    document.getElementById('nav_list').style.cssText = 'background-color: none';
  }
}
