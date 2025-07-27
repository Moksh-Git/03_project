// action types

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

export function addCartItemQuantity(productId,quantity) {
  return {
  type: CART_ADD_ITEMS,
  payload: { productId, quantity },
};
}

export function removeCartItemQuantity(productId,quantity) {
  return {
  type: CART_REMOVE_ITEMS,
  payload: { productId, quantity },
};
}

// Reducers
export default function cartReducer(state = [], action) {
  switch (action.type) {
    case CART_ADD_ITEMS:
      return [...state, action.payload];

    case CART_REMOVE_ITEMS:
      return state.filter(
        (cartItem) => cartItem.productId != action.payload.productId
      );

    case CART_ITEMS_INCREASE_QUANTITY:
      return state.map((cartItem) => {
        if (cartItem.productId === action.payload.productId)
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        return cartItem;
      });

    case CART_ITEMS_DECRESE_QUANTITY:
      return state
        .map((item) => {
          if (item.productId === action.payload.productId)
            return { ...item, quantity: item.quantity - 1 };
          return item;
        })
        .filter((item) => item.quantity > 0);

    default:
      return state;
  }
}
