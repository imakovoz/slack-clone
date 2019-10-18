import { merge } from "lodash";
import { RECEIVE_USERS } from "../../actions/user_actions";

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  // console.log(action);
  switch (action.type) {
    case RECEIVE_USERS:
      return merge({}, state, action.users.data.users);
    default:
      return state;
  }
};

export default usersReducer;
