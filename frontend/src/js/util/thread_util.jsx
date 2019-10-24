import axios from "axios";

export const createThread = thread => {
  return axios.post("http://localhost:3001/api/threads", { data: thread });
};

export const fetchThreads = thread => {
  return axios.get("http://localhost:3001/api/threads");
};

export const deleteThread = id => {
  console.log(id);
  return axios.delete(`http://localhost:3001/api/threads/${id}`);
};
