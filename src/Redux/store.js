import { createStore } from "redux";
import RootReducer from "./Reducer/rootReducer";


const store = createStore(RootReducer)
export default store;