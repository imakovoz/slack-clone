import { login, signup, resetErrors } from "../../actions/session_actions";
import Index from "./index.jsx";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
