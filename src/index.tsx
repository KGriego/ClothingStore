/* Library Imports */
import * as React from "react";
import { render } from "react-dom";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

/* Redux Imports */

/* Component Imports */
import App from "./App";

// create history for router
const history = createBrowserHistory();

render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById("react-entry")
);
