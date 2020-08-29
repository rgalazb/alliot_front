import userService from "../services/UserService";

import {
  LOGIN_SUCCES,
} from "./types";

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
