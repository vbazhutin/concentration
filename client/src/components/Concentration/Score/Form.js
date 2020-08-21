import PropTypes from 'prop-types'
import React from 'react'

import api from 'api'

export const Form = ({gameOver, time, pairs}) => {

  const handleSubmit = async (event) => {
    event.preventDefault()

    const res = await api.addScore({initials: event.target.elements[0].value, time, pairs})
  }


  if (!gameOver) {
    return null
  }

  return (
    <form onSubmit={handleSubmit}
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
  gameOver: PropTypes.bool,
  pairs: PropTypes.number,
  time: PropTypes.string
}
