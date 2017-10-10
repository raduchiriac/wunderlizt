export const ADD_TO_CART = '[Cart] Add Product';
export const REMOVE_FROM_CART = '[Cart] Remove Product';
export const CHECKOUT = '[Cart] Checkout';

export function addToCartAction(id) {
  return {
    type: ADD_TO_CART,
    payload: { id }
  };
}

export function removeFromCartAction(id) {
  return {
    type: REMOVE_FROM_CART,
    payload: { id }
  };
}