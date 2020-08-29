import userService from "../services/UserService";

import {
  LOGIN_SUCCES,
  LOGIN_FAIL,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  LOGOUT_SUCCESS,
} from "./types";

export const logout = history => dispatch  => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  }

  userService
    .deleteLogOut(config)
    .then(({data, headers, status}) => {
      history.push('/')
      dispatch({
        type: LOGOUT_SUCCESS,
        payload: { ...data, ...headers },
      })
    })
};

export const signup = ({ email, password, history }) => (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ user: { email, password }});

  userService
    .postSignUp(body, config)
    .then(({ data, headers, status }) => {
      history.push('/requests')
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: { ...data, ...headers },
      })
    })
    .catch(() => {
      dispatch({
        type: SIGNUP_FAIL,
        payload: {
          msg: 'Error al Registrarse'
        },
      })
    });
};

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
          msg: 'Error al iniciar sesión'
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
