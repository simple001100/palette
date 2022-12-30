import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { RoomProvider } from "./context";
import { history } from "./store/history";

ReactDOM.render(
  <RoomProvider>
    <Router history={history}>
      <App />
    </Router>
  </RoomProvider>,
  document.getElementById("root")
);
