import { combineReducers } from "redux";
import ProductsReducer from "./cartItems";

const RootReducer = combineReducers({
  Cart: ProductsReducer,
});

export default RootReducer;
