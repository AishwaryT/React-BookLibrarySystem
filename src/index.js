import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import store from "./store";
import Page from "./Page";
import List from "./List";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => (
  <Provider store={store}>
    <div className="panel" >
      <Router>
        <div>

          <ul className="menu-list">
            <li>
              <Link to="/page">Add Books</Link>
            </li>
            <li>
              <Link to="/list">List Books</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/page">
              <Page />
            </Route>
            <Route path="/list">
              <List />
            </Route>
            <Route path="/">
              <List />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  </Provider>
);

render(<App />, document.getElementById("root"));
