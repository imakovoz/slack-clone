import { fetchUsers } from "../../actions/user_actions";
import { createThread, fetchThreads } from "../../actions/thread_actions";
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
    createThread: thread => dispatch(createThread(thread))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WebsocketClass);
