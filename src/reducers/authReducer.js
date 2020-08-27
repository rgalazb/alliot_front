import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCES,
  LOGOUT_SUCCES,
  REGISTER_FAIL,
  REGISTER_SUCCES,
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  isLoading: false,
  user: null,
  msg: null,
  id: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload,
      };
    case LOGIN_SUCCES:
    case REGISTER_SUCCES:
      localStorage.setItem("token", action.payload.authorization);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case LOGIN_FAIL:
    case REGISTER_FAIL:
    case LOGOUT_SUCCES:
    case AUTH_ERROR:
      localStorage.removeItem("token");
      return {
        ...state,
        token: localStorage.getItem("token"),
        isAuthenticated: null,
        isLoading: false,
        user: null,
        msg: null,
        id: null,
      };
    default:
      return state;
  }
}
