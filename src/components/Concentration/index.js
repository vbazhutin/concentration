import React, { useState } from "react"

import { Form } from "./Form"
import { Cards } from "./Cards"
import { Timer } from "./Timer"

export const Concentration = () => {
  const [pairsOfCards, setPairsOfCards] = useState("")
  const [toggleTimer, setToggleTimer] = useState(false)

  const handleCards = (toggle) => {
    setToggleTimer(toggle)
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
      <Cards handler={handleCards} pairs={pairsOfCards} />
      <Timer toggle={toggleTimer} />
    </main>
  )
}
