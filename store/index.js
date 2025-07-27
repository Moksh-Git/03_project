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

console.log(store);

store.dispatch(addCartItemQuantity(1,1));
store.dispatch(addCartItemQuantity(12,1));
store.dispatch(addCartItemQuantity(15,1));
store.dispatch(addCartItemQuantity(6,1));
store.dispatch(decreaseCartItemQuantity(12));
store.dispatch(decreaseCartItemQuantity(15));




store.dispatch(addInWishList(3));
store.dispatch(addInWishList(5));
store.dispatch(addInWishList(11));
store.dispatch(addInWishList(14));
store.dispatch(removeInWishList(3));
store.dispatch(removeInWishList(5));

console.log(store.getState());
