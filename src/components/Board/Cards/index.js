import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"

import { Card } from "./Card"


import "./Cards.css"

export const Cards = ({ cards, handler }) => {
  // This will just manage flipped and matched cards
  const [flippedCards, setFlippedCards] = useState([])

  // useEffect(() => {
  //   setCards((prevCards) =>
  //     prevCards.map((card) => {
  //       if (card.id === flippedCards[0].id || card.id === flippedCards[1]?.id) {
  //         card.flipped = true
  //       }
  //       return card
  //     })
  //   )

  //   if (flippedCards[0]?.code === flippedCards[1]?.code) {
  //     cards.map((card) => {
  //       if (card.id === flippedCards[0].id || card.id === flippedCards[1]?.id) {
  //         card.matched = true
  //         return card
  //       }
  //     })
  //   }
  // }, [flippedCards])

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
    cards.map(({ code, matched, id, image, suit, value }, i) => (
      <Card
        code={code}
        id={id}
        image={image}
        matched={matched}
        suit={suit}
        value={value}
        handler={flipHandler}
        key={i}
      />
    ))

  return <div className="container">{renderCards()}</div>
}

Cards.propTypes = {
  cards: PropTypes.array.isRequired,
  // Notify parent of when to start and stop the timer
  handler: PropTypes.func,
}
