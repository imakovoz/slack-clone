import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/auth_route_util.jsx";
import SessionContainer from "./auth/session_form_container";
import IndexContainer from "./index/index_container";
import WebsocketContainer from "./websockets/websocket_container";

const App = () => (
  <div id="RouterSwitch">
    <Switch>
      <AuthRoute path="/signup" component={SessionContainer} />
      <AuthRoute path="/login" component={SessionContainer} />
      <ProtectedRoute path="/" component={WebsocketContainer} />
    </Switch>
  </div>
);

export default App;
