import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {ForAllCategoriesComponent} from './for-all-categories/for-all-categories.component';
import {ForManCategoriesComponent} from './for-man-categories/for-man-categories.component';
import {ForWomanCategoriesComponent} from './for-woman-categories/for-woman-categories.component';
import {ViewProductsComponent} from './view-products/view-products.component';

const routes: Routes = [
  { path: '', redirectTo: 'forall', pathMatch: 'full' },
  { path: 'forall', component: ForAllCategoriesComponent },
  { path: 'forman', component: ForManCategoriesComponent },
  { path: 'forwoman', component: ForWomanCategoriesComponent },
  { path: ':prevCat/:catId/products' , component: ViewProductsComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
