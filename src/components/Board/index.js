import React, { useState, useEffect } from "react"

import { Cards } from "./Cards"
import { Timer } from "./Timer"

import api from "api"

export const Board = () => {
  const [cards, setCards] = useState([])
  const [toggleTimer, setToggleTimer] = useState(false)

  useEffect(
    () => {
      ;(async () => {
        const { cards } = await api.index(4)

        // Duplicate the cards and then add unique id to each one (⚠️ 'references')
        const cardsWithIDs = cards.concat(Array.from(cards)).map((card, i) => {
          // We can do the 'spread' 'shallow copy' for these non-nested objects
          const cardCopy = {...card}
          cardCopy.id = `${cardCopy.code}-${i}`
          return cardCopy
        })

        setCards(cardsWithIDs)
      })()
    },
    // DO NOT re-trigger this effect after the initial mount - don't worry about state changes!
    []
  )

  const handleCards = (toggle) => {
    setToggleTimer(toggle)
  }

  return (
    <main>
      <Cards cards={cards} handler={handleCards} />
      <Timer toggle={toggleTimer}/>
    </main>
  )
}
