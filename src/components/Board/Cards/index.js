import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"

import { Card } from "./Card"

import api from "api"

export const Cards = ({ handler }) => {
  const [cards, setCards] = useState([])

  useEffect(() => {
    ;(async () => {
      const { cards } = await api.index(4)
      setCards(cards)
    })()
  }, [])

  return cards.map(({ image, suit, value }, i) => (
    <Card image={image} suit={suit} value={value} key={i} />
  ))
}

Cards.propTypes = {
  // Notify parent of when to start and stop the timer
  handler: PropTypes.func,
}
