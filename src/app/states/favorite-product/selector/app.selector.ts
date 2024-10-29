import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { FavoriteProduct } from "src/app/models/favorite-product.model";

// Get complete state of the favorites products in application
export const selectAppState = createFeatureSelector<AppState>('favorite');

// get All favorites products
export const selectProducts = createSelector(
  selectAppState,
  (state: AppState) => state.products
);

// get One favorite product by ID
export const selectProductById = createSelector(
  selectProducts,
  (products: FavoriteProduct[], props: { productId: number }) =>
    products.find(product => product.id === props.productId)
);
