import React, { useState } from "react"

import { Form } from "./Form"
import { Cards } from "./Cards"
import { Timer } from "./Timer"

export const Concentration = () => {
  const [pairsOfCards, setPairsOfCards] = useState("4")
  const [toggleTimer, setToggleTimer] = useState(false)

  const handleCards = (toggle) => {
    setToggleTimer(toggle)
  }

  const handleForm = (event) => {
    event.preventDefault()
    setPairsOfCards(event.target.elements[0].value)
  }

  return (
    <main>
      <Form handler={handleForm} />
      <Cards handler={handleCards} pairs={pairsOfCards} />
      <Timer toggle={toggleTimer} />
    </main>
  )
}
