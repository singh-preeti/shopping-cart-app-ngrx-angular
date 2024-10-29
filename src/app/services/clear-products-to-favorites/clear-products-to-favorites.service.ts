import { Injectable } from '@angular/core';
import { StorageService } from '../storage/storage.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/states/favorite-product/app.state';
import { clear } from 'src/app/states/favorite-product/action/app.action';

@Injectable({
  providedIn: 'root'
})
export class ClearProductsToFavoritesService {

  constructor(private readonly storageService:StorageService<void>,
    private readonly store:Store<AppState>) { }

  execute(){
    this.storageService.remove('favoritesProduct');
    this.store.dispatch(clear());
  }
}
