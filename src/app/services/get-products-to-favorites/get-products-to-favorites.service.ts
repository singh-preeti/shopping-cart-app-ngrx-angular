import { Injectable } from '@angular/core';
import { StorageService } from '../storage/storage.service';
import { FavoriteProduct } from 'src/app/models/favorite-product.model';

@Injectable({
  providedIn: 'root'
})
export class GetProductsToFavoritesService {

  constructor(private readonly storageService:StorageService<FavoriteProduct[]>) { }

  execute():FavoriteProduct[]{
    const products = <FavoriteProduct[]>this.storageService.get('favoritesProduct');

    return products;
  }
}
