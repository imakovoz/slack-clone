import { login, signup, resetErrors } from '../../actions/session_actions';
import SessionForm from './session_form.jsx';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return ({
    errors: state.errors.session,
    formType: ownProps.location.pathname.split('/')[1]
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    signup: (user) => dispatch(signup(user)),
    login: (user) => dispatch(login(user)),
    resetErrors: () => dispatch(resetErrors()),
  })
};


export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
