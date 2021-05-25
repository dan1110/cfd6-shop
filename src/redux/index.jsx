import { combineReducers, compose, createStore } from 'redux';
import AuthReducer from './reducer/authReducer';

let reducer = combineReducers({
	auth: AuthReducer,
});

// const middleware = (store) => (next) => (action) => {
// 	console.log(action);
// 	next(action);
// };applyMiddleware(middleware)

// const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

let store = createStore(reducer);

export default store;
