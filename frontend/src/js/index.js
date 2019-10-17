import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import axios from "axios";
// import { login, logout, signup } from './actions/session_actions';
// import { fetchUsers } from './actions/user_actions';
// import { fetchPosts, createPost } from './actions/post_actions';
import Root from "./components/root.jsx";

document.addEventListener("DOMContentLoaded", () => {
  var sessionToken1 = localStorage.getItem("sessionToken");
  if (sessionToken1) {
    axios
      .post("http://localhost:3001/api/auth/checkLogin", {
        data: sessionToken1
      })
      .then(
        response => {
          window.currentUser = response.data.currentUser;
        },
        error => {
          console.log(`error${error}`);
        }
      )
      .then(e => {
        let store;
        if (window.currentUser) {
          const preloadedState = {
            session: { currentUser: window.currentUser }
          };
          store = configureStore(preloadedState);
          delete window.currentUser;
        } else {
          store = configureStore();
        }

        const root = document.getElementById("app");
        ReactDOM.render(<Root store={store} />, root);
      });
  } else {
    let store;
    if (window.currentUser) {
      const preloadedState = {
        session: { currentUser: window.currentUser }
      };
      store = configureStore(preloadedState);
      delete window.currentUser;
    } else {
      store = configureStore();
    }

    const root = document.getElementById("app");
    ReactDOM.render(<Root store={store} />, root);
  }

  // debugger;
});
