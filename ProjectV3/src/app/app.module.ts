import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ForAllCategoriesComponent } from './for-all-categories/for-all-categories.component';
import { ForManCategoriesComponent } from './for-man-categories/for-man-categories.component';
import { ForWomanCategoriesComponent } from './for-woman-categories/for-woman-categories.component';
import { AppRoutingModule } from './app-routing.module';
import { ViewProductsComponent } from './view-products/view-products.component';
import { ViewProductComponent } from './view-product/view-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ForAllCategoriesComponent,
    ForManCategoriesComponent,
    ForWomanCategoriesComponent,
    ViewProductsComponent,
    ViewProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
