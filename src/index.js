import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";
import store from "./app/store";
import "antd/dist/antd.css";

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);

// https://www.youtube.com/watch?v=9DDX3US3kss&list=PLUcbDO37OCtQLz6kZpsAbrmmy9fKvlBFu&index=25&t=9s
// 39:52
