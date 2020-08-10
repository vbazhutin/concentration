import PropTypes from "prop-types"
import React from "react"

export const Card = ({ image, flipped, matched, suit, value, handler }) => {
  return (
    <img
      src={flipped ? image : "https://source.unsplash.com/random/226x314"}
      alt={`${value} of ${suit}`}
      onClick={handler}
    />
  )
}

Card.propTypes = {
  handler: PropTypes.func,
  image: PropTypes.string.isRequired,
  flipped: PropTypes.bool,
  matched: PropTypes.bool,
  suit: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

Card.defaultProps = {
  flipped: false,
  matched: false,
}
