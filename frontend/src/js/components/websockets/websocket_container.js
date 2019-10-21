import { fetchUsers } from "../../actions/user_actions";
import { createThread } from "../../actions/thread_actions";
import WebsocketClass from "./websocket.jsx";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    users: Object.values(state.entities.users)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: users => dispatch(fetchUsers(users)),
    createThread: thread => dispatch(createThread(thread))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WebsocketClass);
