import * as cartActions from '../actions/cartActions';

const initialState = { };

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
  case cartActions.ADD_TO_CART:
    return Object.assign({}, state, {[action.payload.id]: (state[action.payload.id] && state[action.payload.id] + 1 || 1)});
  case cartActions.REMOVE_FROM_CART:
    return Object.assign({}, state, {[action.payload.id]: (state[action.payload.id] && state[action.payload.id] - 1 || 0)});
  default:
    return state;
  }
}