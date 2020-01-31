import { createSelector, createFeatureSelector } from '@ngrx/store';

import { AppState } from '../app.state';
import { CartState } from '../states/cart.state';

const cartFeatureState = createFeatureSelector<AppState, CartState>('cart');

export const cartState = createSelector(
    cartFeatureState,
    (state: CartState) => state.cart
);

export const itemState = createSelector(
    cartFeatureState,
    (state: CartState) => state.items

);
