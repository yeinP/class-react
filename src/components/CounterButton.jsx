import React from 'react'

const CounterButton = ({step, type, onClick}) => {



    return (
      <button type="button" className = "bg-blue-800 text-white px-2 p-1 m-1" onClick={()=> onClick(type)}>
        {type === 'increase' ? '+' : '-' } {step}
        </button>
    )
  }

export default CounterButton