import { instance1 } from "./instance";

const signupApi = (data) => {
  return instance1.post("/auth/signup", data);
};

const signinApi = (data) => {
  return instance1.post("/auth/signin", data);
};

export { signupApi, signinApi };
