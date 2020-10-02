import { combineReducers, createStore } from "redux";
import memoReducer from "./modules/memo";

const rootReducer = combineReducers({
  memoReducer,
});

const store = createStore(rootReducer);

export default store;
