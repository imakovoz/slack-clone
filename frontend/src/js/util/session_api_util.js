import axios from "axios";

export const signup = user => {
  return axios.post("http://localhost:3001/api/auth/signup", {
    data: user
  });
};

export const login = user => {
  return axios.post("http://localhost:3001/api/auth/login", {
    data: user
  });
};

export const logout = user => {
  return axios.post("http://localhost:3001/api/auth/logout", {
    data: user
  });
};
