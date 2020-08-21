import PropTypes from 'prop-types'
import React from "react"

export const Form = ({handler}) => {
  return (
    <form
      className="my-flex my-flex--align-center my-flex--justify-center"
      onSubmit={handler}
    >
      <div>
        <label htmlFor="pairsOfCards">How many pairs of cards?</label>
        <input
          type="number"
          id="pairsOfCards"
          placeholder="Default: 4"
          className="mx-2"
        />
      </div>
      <button className="button is-rounded">Go!</button>
    </form>
  )
}

Form.propTypes = {
  handler: PropTypes.func
}
