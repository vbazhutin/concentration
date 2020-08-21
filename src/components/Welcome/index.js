import React from "react"

import { Link } from "react-router-dom"

export const Welcome = () => (
  <header className="has-background-primary has-text-centered py-4">
    <Link to="/" className="has-text-light">
      <h1>
        Concentration!&nbsp;
        <span role="img" aria-label="brain">
          🧠
        </span>
      </h1>
    </Link>
    <Link to="/game" className="mr-2">
      Start Game!
    </Link>
    <Link to="/how-2-play" className="ml-2">
      How To Play
    </Link>
  </header>
)
