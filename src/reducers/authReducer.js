import {
  LOGIN_SUCCES,
  LOGIN_FAIL,
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
      localStorage.setItem("token", action.payload.authorization);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        erroMessage: action.payload.msg,
        isAuthenticated: false,
      }
    default:
      return state;
  }
}
