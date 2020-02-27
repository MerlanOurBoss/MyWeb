import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';

import { ProductListComponent } from './product-list/product-list.component';
import { CategoryProductsComponent } from './category-products/category-products.component';
import { CompComponent } from './comp/comp.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/categories', pathMatch: 'full' },
      {path: 'categories', component: DashboardComponent},
      {path: 'categories/:id/products', component: CategoryProductsComponent},
      {path: 'categories/:id/products/:id2', component: ProductViewComponent},
      {path: 'categories/allproducts', component: CompComponent}
    ]),

  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    CategoryProductsComponent,
    CompComponent,
    DashboardComponent,
    ProductViewComponent,
    ProductAlertsComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
