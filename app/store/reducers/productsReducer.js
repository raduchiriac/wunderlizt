import * as productsActions from '../actions/productsActions';

const initialState = {
  items: []
};

export default function productsReducer(state = initialState, action) {
  switch(action.type) {
  case productsActions.LOAD_PRODUCTS:
    state.items = [...state.items, ...action.payload];
    return state;
  case productsActions.LOAD_PRODUCT:
    return state;
  default:
    return state;
  }
}