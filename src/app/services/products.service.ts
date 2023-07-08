import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import {
  loadProducts,
  loadProductsSuccess,
  loadProductsFailure,
} from '../store/products.actions';
import { ProductState, Product } from '../store/products.state';

interface ProductApiResponse {
  results: Product[];
}

@Injectable()
export class ProductService {
  private apiUrl = "https://limitless-fjord-38871.herokuapp.com/v1/products";

  constructor(private http: HttpClient, private store: Store<ProductState>) {}

  getProducts(): Observable<ProductApiResponse> {
    this.store.dispatch(loadProducts()); 
  
    return this.http.get<ProductApiResponse>(this.apiUrl).pipe(
      catchError((error) => {
        console.error('Error fetching products:', error);
        this.store.dispatch(
          loadProductsFailure({ error: error.message }) 
        );
        return of({ results: [] }); 
      }),
      map((response) => {
        const products = response.results.map((productApi) => {
          return {
            id: productApi.id,
            name: productApi.name,
            price: productApi.price,
            stock: productApi.stock,
            pictureURL: productApi.pictureURL,
            description: productApi.description,
            __v: productApi.__v,
          };
        });
        return { ...response, results: products };
      }),
      tap((response) => {
        this.store.dispatch(
          loadProductsSuccess({ products: response.results }) 
        );
      })
    );
  } 
}