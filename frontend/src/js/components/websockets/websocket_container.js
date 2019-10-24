import { fetchUsers } from "../../actions/user_actions";
import {
  createThread,
  fetchThreads,
  deleteThread
} from "../../actions/thread_actions";
import WebsocketClass from "./websocket.jsx";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    users: Object.values(state.entities.users),
    threads: Object.values(state.entities.threads)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: users => dispatch(fetchUsers(users)),
    fetchThreads: threads => dispatch(fetchThreads(threads)),
    createThread: thread => dispatch(createThread(thread)),
    deleteThread: id => dispatch(deleteThread(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WebsocketClass);
