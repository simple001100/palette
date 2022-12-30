import React from "react";
import "./App.scss";

import Home from "./pages/Home";
import { Competitions } from "./pages/Сompetitions";
import SingleCompetition from "./pages/SingleCompetition";
import Error from "./pages/Error";

import { NavBar } from "./components/NavBar";

import { Switch, Route, Redirect } from "react-router-dom";
import { BASE_ROUTE, COMPETITIONS_ROUTE, HOME_ROUTE } from "./const";

function App() {
  return (
    < >
      <NavBar />
      <Switch>
        <Route exact path={BASE_ROUTE}>
          <Redirect to={HOME_ROUTE} />
        </Route>
        <Route exact path={HOME_ROUTE} component={Home} />
        <Route exact path={COMPETITIONS_ROUTE} component={Competitions} />
        <Route exact path={`${COMPETITIONS_ROUTE}/:slug`} component={SingleCompetition} />
        <Route component={Error} />
      </Switch>
    </ >
  );
}

export default App;

