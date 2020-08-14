import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"

import "bulma/css/bulma.css"

export const Timer = ({ toggle }) => {
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

  return <p className="container-fluid has-background-dark has-text-centered has-text-info is-size-1 py-3">{convertSecondsToMinutesAndSeconds(time)}</p>
}

Timer.propTypes = { toggle: PropTypes.bool }

Timer.defaultProps = {
  toggle: false,
}
