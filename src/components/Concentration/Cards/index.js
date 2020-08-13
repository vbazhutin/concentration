import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"

import { Card } from "./Card"

import api from "api"

import "./Cards.css"

export const Cards = ({ handler }) => {
  const [cards, setCards] = useState([])

  useEffect(() => {
    ;(async () => {
      const { cards } = await api.index(4)

      // Duplicate the cards and then add unique id to each one (⚠️ 'references')
      const cardsWithIDs = cards.concat(Array.from(cards)).map((card, i) => {
        // We can do the 'spread' 'shallow copy' for these non-nested objects
        const cardCopy = { ...card }
        cardCopy.id = `${cardCopy.code}-${i}`
        return cardCopy
      })

      setCards(cardsWithIDs)
    })()
  }, [])

  // if matchedCards.length = cards.length / 2, then stop the timer
  const flipHandler = ({ currentTarget: { dataset } }) => {
    handler(true)

    // Get the code and id from dataset
    const { id } = dataset

    // Filter out flipped cards
    const flippedCards = cards.filter(({ flipped }) => flipped)

    // Check if any cards are currently flipped
    if (!flippedCards.length) {
      // If there are no flipped cards, we can immediately find and flip the card that matches dataset id (setCards)
      setCards(
        cards.map((card) => {
          if (card.id === id) {
            card.flipped = true
          }

          return card
        })
      )
    }

    // As long as there are less than 2 cards in 'flippedCards'
    if (flippedCards.length < 2) {
      setCards(
        cards.map((card) => {
          if (card.id === id) {
            card.flipped = true
          }

          return card
        })
      )
    }
  }

  const renderCards = () =>
    // 'suit' and 'value' are just for alt tag
    cards.map(({ code, flipped, matched, id, image, suit, value }, i) => {
      return (
        <Card
          code={code}
          flipped={flipped}
          id={id}
          image={image}
          matched={matched}
          suit={suit}
          value={value}
          handler={flipHandler}
          key={i}
        />
      )
    })

  return <div className="container">{renderCards()}</div>
}

Cards.propTypes = {
  // Notify parent of when to start and stop the timer
  handler: PropTypes.func,
}
