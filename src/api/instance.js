import axios from "axios";

export const BASEURL = "https://www.pre-onboarding-selection-task.shop/";
const getToken = () => localStorage.getItem("access_token");

const instance1 = axios.create({
  baseURL: BASEURL,
  headers: { "Content-Type": "application/json" },
});

const instance2 = axios.create({
  baseURL: BASEURL,
});

instance2.interceptors.request.use(
  async (config) => {
    config.headers["Content-Type"] = "application/json";
    config.headers.Authorization = `Bearer ${await getToken()}`;
    return config;
  },
  async (error) => {
    console.log("에러발생", error);
    return Promise.reject(error);
  }
);

instance2.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export { instance1, instance2 };
