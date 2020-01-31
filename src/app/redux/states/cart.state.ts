import {Product} from 'src/app/models/product.model'

export interface CartState {
    cart: number;
    items: Product[];
}