import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { ProductService } from '../../services/products.service';
import { of } from 'rxjs';
import {
  loadProducts,
  loadProductsSuccess,
  loadProductsFailure,
} from './products.actions';

@Injectable()
export class ProductEffects {
  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProducts),
      mergeMap(() =>
        this.productService.getProducts().pipe(
          map((response) => loadProductsSuccess({ products: response.results })),
          catchError((error) => of(loadProductsFailure({ error: error.message })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}
}
