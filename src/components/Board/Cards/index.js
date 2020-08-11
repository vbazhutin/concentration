import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"

import { Card } from "./Card"

import api from "api"

import "./Cards.css"

export const Cards = ({ handler }) => {
  const [cards, setCards] = useState([])
  const [flippedCards, setFlippedCards] = useState([])

  useEffect(() => {
    ;(async () => {
      const { cards } = await api.index(4)

      // Duplicate the cards and then add unique id to each one (⚠️ 'references')
      const cardsWithIDs = cards.concat(Array.from(cards)).map((card, i) => {
        const cardCopy = JSON.parse(JSON.stringify(card))
        cardCopy.id = `${cardCopy.code}-${i}`
        return cardCopy
      })

      setCards(cardsWithIDs)
    })()
  },
    // DO NOT re-trigger this effect after the initial mount - don't worry about state changes!
    [])

  useEffect(() => {
    setCards((prevCards) =>
      prevCards.map((card) => {
        if (card.id === flippedCards[0].id || card.id === flippedCards[1]?.id) {
          card.flipped = true
        }
        return card
      })
    )
  }, [flippedCards])

  const flipHandler = ({ target: { dataset } }) => {
    // If it's true that there is no length on flippedCards...
    if (!flippedCards.length) {
      setFlippedCards((flippedCards) =>
        flippedCards.concat({ id: dataset.id, code: dataset.code })
      )
    } else if (flippedCards[0].id !== dataset.id) {
      setFlippedCards((flippedCards) =>
        flippedCards.concat({
          id: dataset.id,
          code: dataset.code,
        })
      )

    }

  }

  const renderCards = () =>
    // 'suit' and 'value' are just for alt tag
    cards.map(({ code, id, image, suit, value }, i) => (
      <Card
        code={code}
        id={id}
        image={image}
        suit={suit}
        value={value}
        handler={flipHandler}
        key={i}
      />
    ))

  return <div className="container">{renderCards()}</div>
}

Cards.propTypes = {
  // Notify parent of when to start and stop the timer
  handler: PropTypes.func,
}
