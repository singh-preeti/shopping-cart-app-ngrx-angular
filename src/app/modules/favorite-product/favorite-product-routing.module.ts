import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeFavoriteProductComponent } from './pages/home-favorite-product/home-favorite-product.component';

const routes: Routes = [
  {
    path:'',
    component: HomeFavoriteProductComponent,
    data: {title: "Favotire Products"}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavoriteProductRoutingModule { }
