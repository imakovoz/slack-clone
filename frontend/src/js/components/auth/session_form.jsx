import React from "react";
import { Link, withRouter } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstname: "",
      lastname: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleFirstname = this.handleFirstname.bind(this);
    this.handleLastname = this.handleLastname.bind(this);
  }

  // TODO add unmount to clear errors
  // componentWillUnmount() {
  //   this.props.resetErrors();
  // }

  demoLogin(e) {
    const user = {
      email: "user" + Math.floor(e.timeStamp),
      password: "starwars",
      firstname: "demo",
      lastname: "login"
    };
    this.props.processForm({ user });
  }

  handlePassword(e) {
    this.setState({ password: e.target.value });
  }
  handleFirstname(e) {
    this.setState({ firstname: e.target.value });
  }
  handleLastname(e) {
    this.setState({ lastname: e.target.value });
  }
  handleEmail(e) {
    this.setState({ email: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    if (this.props.formType === "signup") {
      this.props.signup({ user });
    } else {
      this.props.login({ user });
    }
  }

  render() {
    if (this.props.formType === "signup") {
      return (
        <div>
          <header className="LoginPage">
            <h1>Slack</h1>

            <div>
              <Link to="/login" id="log-in-link">
                {" "}
                Log In{" "}
              </Link>
              <Link to="/signup" id="sign-up-link">
                {" "}
                Sign Up{" "}
              </Link>
            </div>
          </header>
          <div id="SessionPageForm">
            <section id="SessionPageHeader">Join the Slacker community</section>
            <form onSubmit={this.handleSubmit} id="SessionForm">
              <input
                type="text"
                value={this.state.firstname}
                onChange={this.handleFirstname}
                placeholder="First Name"
                className="SessionFormInputs"
              />
              <span className="session-errs">
                {this.props.errors.firstname}
              </span>
              <input
                type="text"
                value={this.state.lastname}
                onChange={this.handleLastname}
                placeholder="Last Name"
                className="SessionFormInputs"
              />
              <span className="session-errs">{this.props.errors.lastname}</span>
              <input
                type="text"
                value={this.state.email}
                onChange={this.handleEmail}
                placeholder="Email"
                className="SessionFormInputs"
              />
              <span className="session-errs">{this.props.errors.email}</span>
              <input
                type="password"
                value={this.state.password}
                onChange={this.handlePassword}
                placeholder="Password"
                className="SessionFormInputs"
              />
              <span className="session-errs">{this.props.errors.password}</span>
              <button className="SessionFormInputs" id="sign-up-submit">
                Submit
              </button>
              <button
                onClick={this.demoLogin}
                className="SessionFormInputs"
                id="demo-login"
              >
                Demo Login
              </button>
            </form>
          </div>
        </div>
      );
    } else {
      let errs = <span />;
      if (Boolean(this.props.errors[0])) {
        errs = <span id="login-errors">{this.props.errors[0]}</span>;
      }
      return (
        <div>
          <header className="LoginPage">
            <h1>Slack</h1>

            <div>
              <Link to="/signup" id="sign-up-link">
                {" "}
                Sign Up{" "}
              </Link>
            </div>
          </header>

          <div id="SessionPageForm">
            <section id="SessionPageHeader">Log In</section>
            {errs}
            <form onSubmit={this.handleSubmit} id="SessionForm">
              <input
                type="text"
                value={this.state.email}
                onChange={this.handleEmail}
                placeholder="Email"
                className="SessionFormInputs"
              />
              <input
                type="password"
                value={this.state.password}
                onChange={this.handlePassword}
                placeholder="Password"
                className="SessionFormInputs"
              />
              <button className="SessionFormInputs" id="sign-up-submit">
                Log In
              </button>
            </form>
          </div>
        </div>
      );
    }
  }
}

export default withRouter(SessionForm);
