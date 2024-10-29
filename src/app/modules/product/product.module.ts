import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { HomeProductComponent } from './pages/home-product/home-product.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomeProductComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule
  ]
})
export class ProductModule { }
