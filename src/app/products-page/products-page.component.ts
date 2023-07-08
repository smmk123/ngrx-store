import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../store/products.state';
import { ProductService } from '../services/products.service';
import { getProducts } from '../store/products.selectors';
import { loadProducts } from '../store/products.actions';


@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})

export class ProductsPageComponent {
  
  products$: Observable<Product[]>;
constructor(private store: Store) {
  this.products$ = this.store.select(getProducts);
}
ngOnInit(): void {
  this.store.dispatch(loadProducts());
}
// ngOnInit() {
//   this.productService.getProducts().subscribe(
//     (response) => {
//       this.products = response.results;
//       console.log(response.results);
//     },
//     (error) => {
//       console.error(error);
//     }
//   );
// }
// this.productService.getProducts().subscribe(
//   (products) => {
//     this.products = products;
//   },
//   // Error handling remains the same
// );
}
