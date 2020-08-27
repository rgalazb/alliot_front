import userService from "../services/UserService";
// import { returnErrors } from "./errorActions";

import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCES,
  LOGOUT_SUCCES,
  REGISTER_FAIL,
  REGISTER_SUCCES,
} from "./types";

// export const loadUser = () => (dispatch, getState) => {
//   dispatch({ type: USER_LOADING });

//   userService
//     .getUser(tokenConfig(getState))
//     .then((response) =>
//       dispatch({
//         type: USER_LOADED,
//         payload: response.data,
//       })
//     )
//     .catch((err) => {
//       const { data, status } = err;
//       dispatch(returnErrors(data, status));
//       dispatch({
//         type: AUTH_ERROR,
//       });
//     });
// };

export const register = ({ name, email, password }) => (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ name, email, password });

  userService
    .postUser(body, config)
    .then((response) =>
      dispatch({
        type: REGISTER_SUCCES,
        payload: response.data,
        id: "LOGIN_SUCCES",
      })
    )
    .catch((err) => {
      console.log(err);
      // const {
      //   response: { data, status },
      // } = err;
      // dispatch(returnErrors(data, status, "REGISTER_FAIL"));
      // dispatch({
      //   type: REGISTER_FAIL,
      // });
    });
};

export const login = ({ email, password }) => (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ user: { email, password }});

  userService
    .postLogin(body, config)
    .then((response) =>
      dispatch({
        type: LOGIN_SUCCES,
        payload: { ...response.data, ...response.headers },
        id: "LOGIN_SUCCES",
      })
    )
    .catch((err) => {
      console.log(err);
      // const {
      //   response: { data, status },
      // } = err;
      // dispatch(returnErrors(data, status, "LOGIN_FAIL"));
      // dispatch({
      //   type: LOGIN_FAIL,
      // });
    });
};

export const logout = () => {
  return {
    type: LOGOUT_SUCCES,
  };
};

export const tokenConfig = (getState) => {
  const token = getState().auth.token;

  const config = {
    headers: {
      "Content-type": "applications/json",
    },
  };

  if (token) {
    config.headers["authorization"] = token;
  }

  return config;
};
