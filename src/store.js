import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";

const middleWare = [thunk];

const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middleWare))
);

export default store;

