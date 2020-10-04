import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import "./assets/styles/global.scss";
import Main from "./components/Main/Main";
import VotingsPage from "./components/VotingsPage/VotingsPage";
function App() {
  return (
    <Router>
      <Switch>
        <Route to="/" exact component={Main} />
        <Route to="/votings" component={VotingsPage} />
      </Switch>
    </Router>
  );
}

export default App;
