import React, { useState } from "react"

import { Form } from "./Form"
import { Cards } from "./Cards"
import { Score } from "./Score"

export const Concentration = () => {
  const [pairsOfCards, setPairsOfCards] = useState("")
  const [toggleTimer, setToggleTimer] = useState(false)
  const [gameOver, setGameOver] = useState(false)

  const handleCards = (toggle) => {
    setToggleTimer(toggle)
    // Toggle will only become 'false' in this 'handler' if all of the cards have been matched
    if (!toggle) {
      setGameOver(true)
    }
  }

  const handleForm = (event) => {
    event.preventDefault()
    setPairsOfCards(event.target.elements[0].value || 4)
  }

  if (!pairsOfCards) {
    return <Form handler={handleForm} />
  }

  return (
    <main>
      <Cards handler={handleCards} pairs={pairsOfCards} gameOver={gameOver} />
      <Score gameOver={gameOver} toggle={toggleTimer} />
    </main>
  )
}
