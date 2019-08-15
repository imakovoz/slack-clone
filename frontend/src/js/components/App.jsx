import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/auth_route_util.jsx";
import SessionContainer from "./auth/session_form_container";

const App = () => (
  <div>
    <Switch>
      <AuthRoute path="/signup" component={SessionContainer} />
      <AuthRoute path="/login" component={SessionContainer} />
    </Switch>
  </div>
);

export default App;
