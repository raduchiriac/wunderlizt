export const ADD_TO_CART = '[Cart] Add Product';

export function addToCartAction(id, price) {
  return {
    type: ADD_TO_CART,
    payload: {id, price}
  };
}