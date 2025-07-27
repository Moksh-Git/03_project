// action types
export const WISHLIST_ADD_ITEMS = "wishlist/addItem";
export const WISHLIST_REMOVE_ITEMS = "wishlist/removeItem";

//Action Creaters
export function addInWishList(payload){
    return { type: WISHLIST_ADD_ITEMS, payload }
}
export function removeInWishList(payload){
    return { type: WISHLIST_REMOVE_ITEMS, payload }
}
//Reducers
export default function wishListReducer(state = [], action) {
  switch (action.type) {
    case WISHLIST_ADD_ITEMS:
      return [...state, action.payload];
    case WISHLIST_REMOVE_ITEMS:
      return state.filter((wish) => wish != action.payload);

    default:
      return state;
  }
}
