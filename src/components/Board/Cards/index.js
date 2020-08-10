import PropTypes from "prop-types"
import React from "react"

export const Cards = ({ handler }) => {
  return <p>Cards!</p>
}

Cards.propTypes = {
  // Notify parent of when to start and stop the timer
  handler: PropTypes.func,
}
