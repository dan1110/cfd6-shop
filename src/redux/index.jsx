import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import AuthReducer from "./reducer/authReducer";

let reducer = combineReducers({
  auth: AuthReducer,
});

const middleWare = (store) => (next) => (action) => {
  if (typeof action === "function") {
    return action(store.dispatch);
  } else {
    next(action);
  }
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducer, composeEnhancers(applyMiddleware(middleWare)));
export default store;
