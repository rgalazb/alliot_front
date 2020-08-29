import { axios } from "../config";

let Service = {
  postLogin: function (body, config) {
    return new Promise((resolve, reject) => {
      axios
        .post("/login", body, config)
        .then((response) => resolve(response))
        .catch((err) => reject(err));
    });
  },
  postSignUp: function (body, config) {
    return new Promise((resolve, reject) => {
      axios
        .post("/signup", body, config)
        .then((response) => resolve(response))
        .catch((err) => reject(err));
    });
  },
  deleteLogOut: function (config) {
    return new Promise((resolve, reject) => {
      axios
        .delete("/logout", null, config)
        .then((response) => resolve(response))
        .catch((err) => reject(err));
    });
  },
};

export default Service;
