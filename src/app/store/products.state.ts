export interface ProductState {
    products: Product[];
  }
  
  export interface Product {
    id: number | undefined;
    name: string;
    price: number;
    stock: number;
    pictureURL: string;
    description: string;
    __v: number;
  }

