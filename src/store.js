import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducers";
console.log(process.env.NODE_ENV);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducers,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunk))
);
