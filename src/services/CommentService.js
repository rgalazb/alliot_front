import { axios } from "../config";

let Service = {
  postComment: function(body, config) {
    return new Promise((resolve, reject) => {
      console.log('body')
      console.log(body)
      axios
        .post("/comments", null, { params: { ...body }, ...config })
        .then((response) => {
          console.log(response)
          resolve(response)})
        .catch((err) => reject(err));
    });
  }
};

export default Service;