import axios from "axios";

export const signup = user => {
  return axios.post("http://localhost:3001/api/auth/signup", {
    data: user
  });
  // return $.ajax({
  //   method: 'POST',
  //   url: 'http://localhost:3001/api/users',
  //   data: user,
  // });
};

export const login = user => {
  console.log(user);
  return axios.post("http://localhost:3001/api/auth/login", {
    data: user
  });
  // return $.ajax({
  //   method: "POST",
  //   url: "http://localhost:3001/auth/login",
  //   data: user
  // });
};

export const logout = () => {
  return $.ajax({
    method: "DELETE",
    url: "http://localhost:3001/api/session"
  });
};
