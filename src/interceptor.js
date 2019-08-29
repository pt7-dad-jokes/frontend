import axios from "axios";

axios.defaults.baseURL = "https://pt7-dad-jokes.herokuapp.com/api";

axios.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  config.headers.authorization = token;
  return config;
});

axios.interceptors.response.use(
  res => {
    if (res.data.token) {
      localStorage.setItem("token", res.data.token);
    }
    return res;
  },
  err => {
    if (err.response.status === 401) {
      localStorage.removeItem("token");
      window.location.reload();
    }
    return err;
  }
);
