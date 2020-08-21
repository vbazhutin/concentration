import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"

import { Card } from "./Card"

import api from "api"

import shuffle from "lodash.shuffle"

import styles from "./Cards.module.css"

export const Cards = ({ gameOver, handler, pairs }) => {
  const [cards, setCards] = useState([])

  useEffect(() => {
    ;(async () => {
      const { cards } = await api.index(pairs)

      // Duplicate the cards and then add unique id to each one (⚠️ 'references')
      const cardsWithIDs = cards.concat(Array.from(cards)).map((card, i) => {
        // We can do the 'spread' 'shallow copy' for these non-nested objects
        const cardCopy = { ...card }
        cardCopy.id = `${cardCopy.code}-${i}`
        return cardCopy
      })

      setCards(shuffle(cardsWithIDs))
    })()
  }, [pairs])

  const flipHandler = ({ currentTarget: { dataset: {code, id} } }) => {
    const flippedCards = cards.filter(({ flipped, matched }) => flipped && !matched)

    handler(true)

    if (flippedCards.length < 2 && flippedCards[0]?.id !== id) {
      setCards(truthifyCards("id", "flipped", id))

      // If the codes of the currently flipped card and the dataset match...
      if (flippedCards[0]?.code === code) {
        setCards(truthifyCards("code", "matched", code))

        if (!cards.find(({ matched }) => !matched)) {
          handler(false)
        }
      } else if (flippedCards[0]) {
        setTimeout(() => {
          setCards(resetFlippedCards())
        }, 1500)
      }
    }
  }

  const resetFlippedCards = () =>
    cards.map((card) => {
      card.flipped = false
      return card
    })

  const truthifyCards = (k2Locate, k2Change, val2Match) =>
    cards.map((card) => {
      if (card[k2Locate] === val2Match) {
        card[k2Change] = true
      }
      return card
    })

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

  if (gameOver) {
    return null
  }

  return <div className={styles.container}>{renderCards()}</div>
}

Cards.propTypes = {
  gameOver: PropTypes.bool,
  handler: PropTypes.func,
  pairs: PropTypes.number
}
