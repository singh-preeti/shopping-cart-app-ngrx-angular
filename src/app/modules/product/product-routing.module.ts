import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeProductComponent } from './pages/home-product/home-product.component';
import { getProductsResolver } from './resolvers/get-products.resolver';

const routes: Routes = [
  {
    path: "",
    component: HomeProductComponent,
    resolve: {products: getProductsResolver},
    data: {title: "Products"}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
