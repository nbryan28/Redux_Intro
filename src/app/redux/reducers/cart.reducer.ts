import { CartActionTypes, CartActions } from '../actions/cart.actions';
import { CartState } from '../states/cart.state';
import { map, filter } from 'rxjs/operators';
import { Product } from 'src/app/models/product.model'

const initialState: CartState = {
  cart: 0,
  items: []
}

export function CartReducer(state: CartState = initialState, action: CartActions): CartState {
  switch (action.type) {
    case CartActionTypes.ADD_PRODUCT: {
      const result = [... state.items];
      let payload: Product[];
      if (action.payload instanceof Array) {
        payload = [...action.payload];
      } else {
        payload = [action.payload];
      }

      payload.forEach(payloadFilter => {
        result.push({
          ...payloadFilter,
        });
      });


      return {
        ...state,
        items: [...result],
        cart: state.cart + 1
      };
    }


    case CartActionTypes.REMOVE_PRODUCT:
     // return { ...state, cart: state.cart - 1 };
    default:
      return state;
  }
}