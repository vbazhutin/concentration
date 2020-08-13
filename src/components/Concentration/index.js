import React, { useState } from "react"

import { Cards } from "./Cards"
import { Timer } from "./Timer"

export const Concentration = () => {
  const [toggleTimer, setToggleTimer] = useState(false)

  const handleCards = (toggle) => {
    setToggleTimer(toggle)
  }

  return (
    <main>
      <Cards handler={handleCards} />
      <Timer toggle={toggleTimer}/>
    </main>
  )
}
