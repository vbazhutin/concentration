import PropTypes from "prop-types"
import React from "react"

import "./Card.css"

export const Card = ({
  code,
  flipped,
  handler,
  id,
  image,
  matched,
  suit,
  value,
}) => {
  return (
    <button onClick={handler} data-code={code} data-id={id}>
      <img
        src={flipped ? image : "https://source.unsplash.com/random/226x314"}
        alt={`${value} of ${suit}`}
        // Conditional class
        className={matched ? "matched" : null}
      />
    </button>
  )
}

Card.propTypes = {
  code: PropTypes.string,
  flipped: PropTypes.bool,
  handler: PropTypes.func,
  id: PropTypes.string,
  image: PropTypes.string.isRequired,
  matched: PropTypes.bool,
  suit: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

Card.defaultProps = {
  flipped: false,
  matched: false,
}
