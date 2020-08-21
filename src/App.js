import React from "react"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { Concentration, HiScores, How2Play, Welcome } from "./components"

import "./App.css"

export const App = () => (
  <Router>
    <Welcome />
    <Route exact={true} path="/">
      <HiScores />
    </Route>

    <Switch>
      <Route path="/game">
        <Concentration />
      </Route>
      <Route path="/how-2-play">
        <How2Play />
      </Route>
    </Switch>
  </Router>
)
