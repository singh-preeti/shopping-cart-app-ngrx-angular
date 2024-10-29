import { Injectable } from '@angular/core';
import { StorageService } from '../storage/storage.service';
import { FavoriteProduct } from 'src/app/models/favorite-product.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/states/favorite-product/app.state';
import { add } from 'src/app/states/favorite-product/action/app.action';

@Injectable({
  providedIn: 'root'
})
export class AddProductToFavoritesService {

  constructor(private readonly storageService:StorageService<FavoriteProduct[]>,
    private readonly store:Store<AppState>) { }

  execute(product:FavoriteProduct){

    const favoritesProducts = <FavoriteProduct[]>this.storageService.get('favoritesProduct');
    
    if(favoritesProducts){
      favoritesProducts.push(product);
      this.storageService.add('favoritesProduct', favoritesProducts);
    }else {
      this.storageService.add('favoritesProduct', [product]);
    }

    this.store.dispatch(add({product}));
  }
}
