import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface ProductApiResponse {
  results: Product[];
}
interface Product {
  _id: {
    $oid: string;
  };
  name: string;
  price: number;
  stock: number;
  pictureURL: string;
  description: string;
  __v: number;
}
@Injectable()
export class ProductService {
  private apiUrl = "https://limitless-fjord-38871.herokuapp.com/v1/products";

  constructor(private http: HttpClient) {}

  getProducts(): Observable<ProductApiResponse> {
    return this.http.get<ProductApiResponse>(this.apiUrl);
  }
}