
import React from 'react'

const CounterButton = (step) => {
  return (
    <button type="button" className = "bg-blue-800 text-white px-1">+{step}</button>
  )
}

export default CounterButton