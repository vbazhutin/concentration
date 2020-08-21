import React, { useState } from "react"

export const HiScores = () => {
  const [scores] = useState([
    {
      initials: "MKT",
      time: "2:33",
      numOfCards: 24,
    },
    {
      initials: "NKT",
      time: "2:35",
      numOfCards: 28,
    },
    {
      initials: "TKO",
      time: "2:55",
      numOfCards: 28,
    },
  ])

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
