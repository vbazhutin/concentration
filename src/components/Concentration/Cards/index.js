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

  const flipHandler = ({
    currentTarget: {
      dataset: { code, id },
    },
  }) => {
    const flippedCards = cards.filter(
      ({ flipped, matched }) => flipped && !matched
    )

    handler(true)

    // Every card has a unique 'id'
    // Make sure that the 'id' 👆🏽 that came in from the currently clicked card is NOT the same as the flipped card that we have
    if (flippedCards.length < 2 && flippedCards[0]?.id !== id) {
      // Take the 'clicked id' and find it in the current cards and set to flip
      setCards(truthifyCards("id", "flipped", id))

      // If the codes of the currently flipped card and the clicked code match...
      if (flippedCards[0]?.code === code) {
        // Set this card as matched
        setCards(truthifyCards("code", "matched", code))

        // If all of the cards are matched...
        if (!cards.find(({ matched }) => !matched)) {
          // Notify parent that the game is over (or stop the timer)
          handler(false)
        }
      }
      // If there is no match, then reset the flipped cards
      else if (flippedCards[0]) {
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

  // e.g. ("id", "flipped", id) - Use the id property and compare with the id value.
  // If it matches, set 'flipped' to 'true'
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
  pairs: PropTypes.number,
}
