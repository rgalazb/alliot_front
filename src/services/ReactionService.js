import { axios } from "../config";

let Service = {
  postReaction: function(body, config) {
    return new Promise((resolve, reject) => {
      axios
        .post("/reactions", null, { params: { ...body }, ...config })
        .then((response) => {
          console.log(response)
          resolve(response)})
        .catch((err) => reject(err));
    });
  }
};

export default Service;
