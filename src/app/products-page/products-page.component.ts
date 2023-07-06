import { Component } from '@angular/core';
import { ProductService } from '../services/products.service';

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
@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})

export class ProductsPageComponent {
  
products: Product[] = [];
constructor(private productService: ProductService) { }
ngOnInit() {
  this.productService.getProducts().subscribe(
    (response) => {
      this.products = response.results;
      console.log(response.results);
    },
    (error) => {
      // Handle any error that occurred during the API request
      console.error(error);
    }
  );
}
// this.productService.getProducts().subscribe(
//   (products) => {
//     this.products = products;
//   },
//   // Error handling remains the same
// );
}
