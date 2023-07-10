import { Component, OnInit } from '@angular/core';
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

export class ProductsPageComponent implements OnInit {
products$!: Observable<Product[]>;
  
constructor(private store: Store, private productService: ProductService) {
  
}
ngOnInit(): void {
  this.store.dispatch(loadProducts());
  this.products$ = this.store.select(getProducts);
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
// );
}
