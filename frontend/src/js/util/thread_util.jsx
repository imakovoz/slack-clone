import axios from "axios";

export const createThread = thread => {
  return axios.post("http://localhost:3001/api/threads", { data: thread });
};
