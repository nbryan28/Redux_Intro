import { RouterReducerState } from '@ngrx/router-store';

import {
    CartState,
} from 'src/app/redux/states';

export interface AppState {
    cart: CartState;
}
