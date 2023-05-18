import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 5000,
});
instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (e) => Promise.reject(e)
);
instance.interceptors.response.use(
  (res) => {
    console.log(123);

    return res.data;
  },
  (e) => Promise.reject(e)
);
export default instance;
