import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ProductListComponent} from './product-list/product-list.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CompComponent} from './comp/comp.component';
import {TopBarComponent} from './top-bar/top-bar.component';
import {CategoryProductsComponent} from './category-products/category-products.component';
import {ProductViewComponent} from './product-view/product-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/categories', pathMatch: 'full' },
  {path: 'categories', component: DashboardComponent},
  {path: 'categories/:id/products', component: CategoryProductsComponent},
  {path: 'categories/:id/products/:id2', component: ProductViewComponent},
  {path: 'categories/allproducts', component: CompComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
