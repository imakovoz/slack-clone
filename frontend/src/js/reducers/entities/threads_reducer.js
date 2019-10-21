import { merge } from "lodash";
import { RECEIVE_THREADS, RECEIVE_THREAD } from "../../actions/thread_actions";

const threadsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_THREAD:
      return merge({}, state, action.thread.data);
    case RECEIVE_THREADS:
      return merge({}, state, action.threads.data.threads);
    default:
      return state;
  }
};

export default threadsReducer;
