import PropTypes from 'prop-types'
import React from 'react'

export const Form = ({gameOver}) => {
  if (!gameOver) {
    return null
  }

  return (
    <form
      className="my-flex my-flex--align-center my-flex--justify-center"
    >
      <div>
        <label htmlFor="initials">Enter UR Initials:</label>
        <input
          type="text"
          id="initials"
           className="mx-2"
        />
      </div>
      <button className="button is-rounded">Go!</button>
    </form>
  )
}

Form.propTypes = {
  gameOver: PropTypes.bool
}
