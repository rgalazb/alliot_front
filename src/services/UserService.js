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
};

export default Service;
