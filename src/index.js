import React from "react";
import ReactDOM from "react-dom";
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom'

import "./index.css";
import App from "./App";
import AboutPage from "./Pages/AboutPage"
import AddFoodtruckPage from "./Pages/AddFoodtruckPage"
import ContactMe from "./Pages/ContactMe"
import NoMatchPage from "./Pages/NoMatchPage"

import * as serviceWorker from "./serviceWorker";
import "./index.css";
const routing = (
  <Router>
    <div className="App"  id="container">
     <nav>
      <ul>
        <li>
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/About">
            About Food Truck Finder
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/AddFoodtruck">
            Add Your Food Truck
          </NavLink>
        </li>	
        <li>
          <NavLink activeClassName="active" to="/Contact">
            Contact
          </NavLink>
        </li>
      </ul>
     </nav>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/About" component={AboutPage} />
      <Route path="/Contact" component={ContactMe} />
      <Route path="/AddFoodtruck" component={AddFoodtruckPage} />
      <Route component={NoMatchPage} />
    </Switch>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
