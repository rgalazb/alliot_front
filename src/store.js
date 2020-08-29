import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import combinedReducers from "./reducers";

const initialState = {};

const middleWare = [thunk];

const store = createStore(
  combinedReducers,
  initialState,
  compose(
    applyMiddleware(...middleWare),
  )
);

export default store;
