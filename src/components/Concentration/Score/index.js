import PropTypes from "prop-types"
import React, { useEffect, useState, Fragment } from "react"

import { Form } from "./Form"

export const Score = ({ gameOver, toggle }) => {
  const [time, setTime] = useState(0)

  const convertSecondsToMinutesAndSeconds = (secs) =>
    new Date(secs * 1000).toISOString().substring(14, 19)

  useEffect(() => {
    while (toggle) {
      const intervalID = setInterval(() => {
        setTime(() => time + 1)
      }, 1000)
      // Cleanup function
      return () => {
        clearInterval(intervalID)
      }
    }
  })

  return (
    <Fragment>
      <p className="container-fluid has-background-dark has-text-centered has-text-info is-size-1 py-3">
        {convertSecondsToMinutesAndSeconds(time)}
      </p>
      {/* Prop drilling  */}
      <Form gameOver={gameOver} />
    </Fragment>
  )
}

Score.propTypes = { gameOver: PropTypes.bool, toggle: PropTypes.bool }
