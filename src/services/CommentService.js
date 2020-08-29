import { axios } from "../config";

let Service = {
  postComment: function(body, config) {
    return new Promise((resolve, reject) => {
      axios
        .post("/comments", null, { params: { ...body }, ...config })
        .then((response) => {
          resolve(response)})
        .catch((err) => reject(err));
    });
  }
};

export default Service;
