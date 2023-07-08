import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState } from './products.state';

const getProductState = createFeatureSelector<ProductState>('products');

export const getProducts = createSelector(
  getProductState,
  (state: ProductState) => state.products
);