import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/auth_route_util.jsx";
import SignupContainer from "./auth/signup_form_container";

const App = () => (
  <div>
    <Switch>
      <AuthRoute path="/signup" component={SignupContainer} />
    </Switch>
  </div>
);

export default App;
