import { combineReducers, createStore } from "redux";
import cartReducer from "./slices/cartSlice";
import wishListReducer from "./slices/wishListSlice";
import productReducer from "./slices/productSlice";
import { produce } from "immer";



const reducer = combineReducers({
  products: productReducer,
  cartItem: cartReducer,
  wishList: wishListReducer
})

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());


const users = [
  {
    name: 'moksh',
    age: 22,
    dob: '11/05/03'
  },
  {
    name: 'jayesh',
    age: 32,
    dob: '15/02/13'
  },
  {
    name: 'kumar',
    age: 54,
    dob: '31/07/75'
  },
]

 
const newUsers = produce(users,(usersCopy)=>{
  usersCopy[1].age=99
})
console.log(newUsers)
