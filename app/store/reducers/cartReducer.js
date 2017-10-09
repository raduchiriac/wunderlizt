import * as cartActions from '../actions/cartActions';

const initialState = {
  items: {}
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
  case cartActions.ADD_TO_CART:
    state.items[action.payload.id] = state.items[action.payload.id] ? {
      amount: state.items[action.payload.id].amount + 1,
      price: action.payload.price
    } : {
      amount: 1,
      price: action.payload.price
    };
    return state;
  default:
    return state;
  }
}