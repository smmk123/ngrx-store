export interface ProductState {
    products: Product[];
  }
  
  export interface Product {
    id: number;
    name: string;
    price: number;
  }