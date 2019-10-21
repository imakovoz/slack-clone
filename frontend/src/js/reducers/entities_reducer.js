import { merge } from "lodash";
import { combineReducers } from "redux";
import users from "./entities/users_reducer";
import threads from "./entities/threads_reducer";

const entitiesReducer = combineReducers({
  users,
  threads
});

export default entitiesReducer;
