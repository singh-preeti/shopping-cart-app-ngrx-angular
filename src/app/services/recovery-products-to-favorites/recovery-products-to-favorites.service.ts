import { Injectable } from '@angular/core';
import { StorageService } from '../storage/storage.service';
import { FavoriteProduct } from 'src/app/models/favorite-product.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/states/favorite-product/app.state';
import { updateAllState } from 'src/app/states/favorite-product/action/app.action';

@Injectable({
  providedIn: 'root'
})
export class RecoveryProductsToFavoritesService {

  constructor(private readonly storageService:StorageService<FavoriteProduct[]>,
    private readonly store:Store<AppState>) { }

  execute():void{
    const products = <FavoriteProduct[]>this.storageService.get('favoritesProduct');
  
    if(products){
      this.store.dispatch(updateAllState({products}));
    }
  }
}
