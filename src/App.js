import React from "react"

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

import { Concentration, HiScores, How2Play } from "./components"

import "./App.css"

export const App = () => (
  <Router>
    <Route exact={true} path="/">
      <h1>Welcome to Concentration!</h1>
      <Link to="/game">Start Game!</Link>
      <Link to="/how-2-play">How To Play</Link>
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
