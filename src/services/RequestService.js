import { axios } from "../config";

let Service = {
  getRequests: function (config) {
    return new Promise((resolve, reject) => {
      console.log(config)
      axios
        .get("/requests", { ...config })
        .then((response) => resolve(response))
        .catch((err) => reject(err));
    });
  },
};

export default Service;