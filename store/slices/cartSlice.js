// action types

import { produce } from "immer";

export const CART_ADD_ITEMS = "cart/addItem";
export const CART_REMOVE_ITEMS = "cart/removeItem";
export const CART_ITEMS_INCREASE_QUANTITY = "cart/increaseItemQuantity";
export const CART_ITEMS_DECRESE_QUANTITY = "cart/decreaseItemQuantity";

//Action Creaters
export function decreaseCartItemQuantity(productId) {
  return {
    type: CART_ITEMS_DECRESE_QUANTITY,
    payload: { productId },
  };
}

export function increaseCartItemQuantity(productId) {
  return {
    type: CART_ITEMS_INCREASE_QUANTITY,
    payload: { productId },
  };
}

export function addCartItemQuantity(productData) {
  return {
    type: CART_ADD_ITEMS,
    payload: productData,
  };
}

export function removeCartItemQuantity(productId, quantity) {
  return {
    type: CART_REMOVE_ITEMS,
    payload: { productId, quantity },
  };
}

// Reducers
export default function cartReducer(originalState = [], action) {
  return produce(originalState, (state) => {
    const existingItemIndex = state.findIndex(
      (item) => item.productId === action.payload.productId
    );
    switch (action.type) {
      case CART_ADD_ITEMS:
        if (existingItemIndex !== -1) {
          state[existingItemIndex].quantity += 1;
          break;
        }
        state.push({ ...action.payload, quantity: 1 });
        break;
      case CART_REMOVE_ITEMS:
        state.splice(existingItemIndex, 1);
        break;

      case CART_ITEMS_INCREASE_QUANTITY:
        state[existingItemIndex].quantity += 1;
        break;

      case CART_ITEMS_DECRESE_QUANTITY:
        state[existingItemIndex].quantity -= 1;
        if (state[existingItemIndex].quantity === 0)
          state.splice(existingItemIndex, 1);
    }
    return state;
  });
}
