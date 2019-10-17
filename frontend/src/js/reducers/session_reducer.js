import { merge } from "lodash";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const sessionReducer = (state = { current_user: null }, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      debugger;
      return merge(
        {},
        { currentUser: JSON.parse(action.currentUser.config.data).data.user }
      );
    default:
      return state;
  }
};

export default sessionReducer;
