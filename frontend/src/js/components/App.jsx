import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/auth_route_util.jsx";

const App = () => (
  <div>
    <header className="header">App Header</header>
    <section className="body">
        <h1 className="title">Hello and Welcome, React-Redux-Sass Starter kit is successfully build and your kit is ready to use</h1>
    </section>
    <footer className="header">App Footer</footer>
  </div>
);

export default App;
