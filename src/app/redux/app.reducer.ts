import { Action } from '@ngrx/store';
import { CartReducer } from './reducers/cart.reducer';
import { ActionReducerMap, ActionReducer, MetaReducer } from '@ngrx/store';
import { AppState } from './app.state';


export const AppReducers: ActionReducerMap<AppState> = {
   cart: CartReducer
};



