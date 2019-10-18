import axios from "axios";

export const fetchUsers = () => {
  return axios.get("http://localhost:3001/api/users");
};
