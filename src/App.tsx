import * as React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ReactSlick from "./react-slick";
import Draft from "./draft-js";
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
          </ul>
        </nav>
        <Switch>
          <Route path="/react-slick" component={ReactSlick} />
          <Route path="/draft-js" component={Draft} />
        </Switch>
      </Router>
    </div>
  );
}
