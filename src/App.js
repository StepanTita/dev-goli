import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import "./assets/styles/global.scss";
import CreateVotingPage from "./components/CreateVotingPage/CreateVotingPage";
import Main from "./components/Main/Main";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import VotingPage from "./components/VotingPage/VotingPage";
import VotingsPage from "./components/VotingsPage/VotingsPage";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/votings" component={VotingsPage} />
        <Route path="/voting/:id" component={VotingPage} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/createVoting" component={CreateVotingPage} />

        <Route path="/" component={Main} />
      </Switch>
    </Router>
  );
}

export default App;
