import axios from "axios";

export const BASEURL = "https://www.pre-onboarding-selection-task.shop/";
const access_token = localStorage.getItem("access_token");

const instance1 = axios.create({
  baseURL: BASEURL,
  headers: { "Content-Type": "application/json" },
});

const instance2 = axios.create({
  baseURL: BASEURL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${access_token}`,
  },
});

export { instance1, instance2 };
