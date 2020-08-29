const getToken = () => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      "Content-type": "applications/json",
    },
  };
  if (token) {
    config.headers["Authorization"] = token;
  }
  return config;
};

export default getToken;
