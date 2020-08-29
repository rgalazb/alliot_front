import { combineReducers } from "redux";
import authReducer from "./authReducer";

// todos nuestros reducers van en este archivo.
export default combineReducers({
  auth: authReducer,
});
