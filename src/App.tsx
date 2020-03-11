import * as React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ReactSlick from "./react-slick";
import Draft from "./draft-js";
import ReactTable from './react-table';
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Samples</h1>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/react-slick">React Slick</Link>
            </li>
            <li>
              <Link to="/draft-js">Draft.js</Link>
            </li>
            <li>
              <Link to="/react-table">React Table</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/react-slick" component={ReactSlick} />
          <Route path="/draft-js" component={Draft} />
          <Route path="/react-table" component={ReactTable} />
        </Switch>
      </Router>
    </div>
  );
}
