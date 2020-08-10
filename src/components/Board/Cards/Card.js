import PropTypes from "prop-types"
import React from "react"

export const Card = ({ image, flipped, matched, suit, value, }) => {
  return <img src={image} alt={`${value} of ${suit}`} />
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  flipped: PropTypes.bool,
  matched: PropTypes.bool,
  suit: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}

Card.defaultProps = {
  flipped: false,
  matched: false,
}
