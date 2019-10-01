// react files
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";

// react router
import { BrowserRouter as Router, Route } from "react-router-dom";

// components
import { AppContainer } from "./components/js/AppContainer";

// stylesheets
import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  rootElement
);
