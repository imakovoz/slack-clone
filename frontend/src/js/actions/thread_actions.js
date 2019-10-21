import * as APIUtil from "../util/thread_util.jsx";
export const RECEIVE_THREADS = "RECEIVE_THREADS";
export const RECEIVE_THREAD = "RECEIVE_THREAD";

export const receiveThread = thread => ({
  type: RECEIVE_THREAD,
  thread
});

export const receiveThreads = threads => ({
  type: RECEIVE_THREADS,
  threads
});

export const createThread = thread => dispatch =>
  APIUtil.createThread(thread).then(threads => dispatch(receiveThread(thread)));

export const fetchThreads = () => dispatch =>
  APIUtil.fetchThreads().then(treads => dispatch(receiveThreads(treads)));
