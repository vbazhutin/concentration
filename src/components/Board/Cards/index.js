import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"

import { Card } from "./Card"

import "./Cards.css"

export const Cards = ({ cards, handler }) => {
  // This will just manage flipped and matched cards
  const [flippedCards, setFlippedCards] = useState([])
  const [matchedCards, setMatchedCards] = useState([])

  useEffect(() => {
    if (flippedCards.length && flippedCards[0].code === flippedCards[1]?.code) {
      setMatchedCards((prevMatched) =>
        prevMatched.concat(flippedCards[0]?.code)
      )
    }
  }, [flippedCards])

  // if matchedCards.length = cards.length / 2, then stop the timer
  const flipHandler = ({ target: { dataset } }) => {
    // If it's true that there is no length of flippedCards...
    if (!flippedCards.length) {
      setFlippedCards((flippedCards) =>
        // 'id' is for uniquely id this card while code is for comparing matching values
        flippedCards.concat({
          id: dataset.id,
          code: dataset.code,
        })
      )
    }
    // Only the card if it's not the same AND if we don't already have 2 cards
    else if (flippedCards[0].id !== dataset.id && flippedCards.length < 2) {
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
    cards.map(({ code, flipped, matched, id, image, suit, value }, i) => {
      // If the current card is 'listed' in flippedCards, lets set it as flipped before it gets rendered
      if (id === flippedCards[0]?.id || id === flippedCards[1]?.id) {
        flipped = true
      }

      if (matchedCards.includes(code)) {
        matched = true
      }

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
  cards: PropTypes.array.isRequired,
  // Notify parent of when to start and stop the timer
  handler: PropTypes.func,
}
