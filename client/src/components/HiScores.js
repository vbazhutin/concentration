import React, { useState, useEffect } from "react"

import api from 'api'

export const HiScores = () => {
  const [scores, setScores] = useState([])

    useEffect(() => {
      (async () => {
        const scores = await api.getScores()
        setScores(scores)
      })()
    }, [])

  const renderTableRows = () =>
    scores.map(({ initials, time, numOfCards }, i) => (
      <tr key={i}>
        <td>{initials}</td>
        <td>{time}</td>
        <td>{numOfCards}</td>
      </tr>
    ))

  return (
    <table className="table my-center">
      <tbody>{renderTableRows()}</tbody>
    </table>
  )
}
