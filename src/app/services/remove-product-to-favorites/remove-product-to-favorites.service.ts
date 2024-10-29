import { Injectable } from '@angular/core';
import { StorageService } from '../storage/storage.service';
import { FavoriteProduct } from 'src/app/models/favorite-product.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/states/favorite-product/app.state';
import { remove } from 'src/app/states/favorite-product/action/app.action';

@Injectable({
  providedIn: 'root'
})
export class RemoveProductToFavoritesService {

  constructor(private readonly storageService:StorageService<FavoriteProduct[]>,
    private readonly store:Store<AppState>) { }

  execute(product:FavoriteProduct):boolean{
    const favoritesProducts = <FavoriteProduct[]>this.storageService.get('favoritesProduct');

    if(favoritesProducts){
      const newfavoritesProducts = favoritesProducts.filter((p) => p.id !== product.id);
      this.storageService.add('favoritesProduct', newfavoritesProducts);
      this.store.dispatch(remove({product}));
      return true;
    }

    return false;
  }
}
