import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
// import { login, logout, signup } from './actions/session_actions';
// import { fetchUsers } from './actions/user_actions';
// import { fetchPosts, createPost } from './actions/post_actions';
import Root from './components/root.jsx';

document.addEventListener('DOMContentLoaded', () => {
  // debugger


  let store;
  if (window.currentUser) {
  const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  const root = document.getElementById('app');
  ReactDOM.render(<Root store={ store }/>, root);
});
