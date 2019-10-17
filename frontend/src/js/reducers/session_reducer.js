import { merge } from "lodash";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const sessionReducer = (state = { current_user: null }, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      localStorage.setItem(
        "sessionToken",
        action.currentUser.data.currentUser.sessionToken
      );
      return merge({}, { currentUser: action.currentUser.data.currentUser });
    default:
      return state;
  }
};

export default sessionReducer;
