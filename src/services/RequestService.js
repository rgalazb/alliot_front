import { axios } from "../config";

let Service = {
  getRequests: function(config) {
    return new Promise((resolve, reject) => {
      axios
        .get("/requests", { ...config })
        .then((response) => resolve(response))
        .catch((err) => reject(err));
    });
  },
  postRequest: function(body, config) {
    return new Promise((resolve, reject) => {
      axios
        .post("/requests", null, { params: { ...body }, ...config })
        .then((response) => {
          console.log(response)
          resolve(response)})
        .catch((err) => reject(err));
    });
  }
};

export default Service;