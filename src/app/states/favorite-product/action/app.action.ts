import { createAction, props } from '@ngrx/store';
import { FavoriteProduct } from "src/app/models/favorite-product.model";

export const add = createAction('[FavoriteProduct] Add',  props<{ product: FavoriteProduct }>());
export const remove = createAction('[FavoriteProduct] Remove', props<{ product: FavoriteProduct }>());
export const updateAllState = createAction('[FavoriteProduct] Update all state of favorites products', 
 props<{ products: FavoriteProduct[] }>());
export const clear = createAction('[FavoriteProduct] Clear');
