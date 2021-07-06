import { createStore, combineReducers, applyMiddleware } from "redux";
import userReducer from "./userReducer";

const reducer = combineReducers({
  userReducer
});

export default createStore(reducer);