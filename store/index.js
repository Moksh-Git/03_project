import { combineReducers, createStore } from "redux";
import cartReducer, { addCartItemQuantity, CART_ADD_ITEMS, CART_ITEMS_DECRESE_QUANTITY, decreaseCartItemQuantity } from "./cartReducer";
import wishListReducer, { addInWishList, removeInWishList, WISHLIST_ADD_ITEMS, WISHLIST_REMOVE_ITEMS } from "./wishListReducer";
import productReducer from "./productReducer";

// const initialState = {
//   products: productsList,
//   cartItem: [],
//   wishList: [3, 2, 5],
// };

const reducer = combineReducers({
  products: productReducer,
  cartItem: cartReducer,
  wishList: wishListReducer
})

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());
