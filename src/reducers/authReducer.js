import {
  LOGIN_SUCCES,
  LOGIN_FAIL,
  SIGNUP_SUCCESS,
  LOGOUT_SUCCESS
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  isLoading: false,
  user: null,
  erroMessage: null,
  id: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCES:
    case SIGNUP_SUCCESS:
      localStorage.setItem("token", action.payload.authorization);
      return {
        ...state,
        user: action.payload.email,
        isAuthenticated: true,
        isLoading: false,
        erroMessage: null,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        erroMessage: action.payload.msg,
        isAuthenticated: false,
      }
    case LOGOUT_SUCCESS:
      localStorage.removeItem("token");
      return {
        ...state,
        user: action.payload.email,
        isAuthenticated: false,
        erroMessage: null,
        isLoading: false,
        id: null,
      }
    default:
      return state;
  }
}
