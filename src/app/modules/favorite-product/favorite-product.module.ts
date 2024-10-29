import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoriteProductRoutingModule } from './favorite-product-routing.module';
import { HomeFavoriteProductComponent } from './pages/home-favorite-product/home-favorite-product.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderFavoriteProductComponent } from './components/header-favorite-product/header-favorite-product.component';


@NgModule({
  declarations: [
    HomeFavoriteProductComponent,
    HeaderFavoriteProductComponent
  ],
  imports: [
    CommonModule,
    FavoriteProductRoutingModule,
    SharedModule
  ]
})
export class FavoriteProductModule { }
