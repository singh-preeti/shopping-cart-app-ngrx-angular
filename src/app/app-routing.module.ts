import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path:'', redirectTo: 'products', pathMatch: 'full' 
  },
  {
    path:'products',
    loadChildren: () => import('./modules/product/product.module').then((m) => m.ProductModule)
  },
  {
    path:'favorites',
    loadChildren: () => import('./modules/favorite-product/favorite-product.module').then((m) => m.FavoriteProductModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
