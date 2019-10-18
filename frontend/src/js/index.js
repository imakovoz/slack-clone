import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import axios from "axios";
import Root from "./components/root.jsx";

document.addEventListener("DOMContentLoaded", () => {
  const sessionToken = localStorage.getItem("sessionToken");
  if (sessionToken) {
    axios
      .post("http://localhost:3001/api/auth/checkLogin", {
        data: sessionToken
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
        const preloadedState = {
          session: { currentUser: window.currentUser }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;

        const root = document.getElementById("app");
        ReactDOM.render(<Root store={store} />, root);
      });
  } else {
    let store;
    store = configureStore();

    const root = document.getElementById("app");
    ReactDOM.render(<Root store={store} />, root);
  }

  // debugger;
});
