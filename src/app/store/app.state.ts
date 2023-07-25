import { ProductState } from "./products/products.state";
import { AuthState } from "./auth/auth.state";

export interface AppState {
    products: ProductState;
    auth: AuthState;
};