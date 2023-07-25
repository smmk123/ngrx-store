import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../store/products/products.state';
import { ProductService } from '../services/products.service';
import { getProducts } from '../store/products/products.selectors';
import { loadProducts } from '../store/products/products.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  products$!: Observable<Product[]>;

  constructor(private store: Store, private productService: ProductService) {
  
  }
  ngOnInit(): void {
    this.store.dispatch(loadProducts());
    this.products$ = this.store.select(getProducts);
  }
}
