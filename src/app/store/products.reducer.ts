import { createReducer, on } from '@ngrx/store';
import { ProductState } from './products.state';
import { loadProductsSuccess, loadProductsFailure } from './products.actions';

export const initialState: ProductState = {
  products: [],
};

export const productReducer = createReducer(
  initialState,
  on(loadProductsSuccess, (state, { products }) => ({
    ...state,
    products,
  })),
  on(loadProductsFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);