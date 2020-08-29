import userService from "../services/UserService";

import {
  LOGIN_SUCCES,
  LOGIN_FAIL,
} from "./types";

export const login = ({ email, password, history }) => (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ user: { email, password }});

  userService
    .postLogin(body, config)
    .then(({ data, headers, status }) => {
      history.push('/requests')
      dispatch({
        type: LOGIN_SUCCES,
        payload: { ...data, ...headers },
      })
    })
    .catch(() => {
      dispatch({
        type: LOGIN_FAIL,
        payload: {
          msg: 'Error al iniciar sessión'
        },
      })
    });
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
