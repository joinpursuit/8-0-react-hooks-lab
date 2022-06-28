import React, { useState } from 'react'
import './NumberOfPets.css'

const NumberOfPets = () => {
  const [count, setCount] = useState(0)

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  return (
    <section className='num-of-pets'>
      <h4>Number of Pets</h4>
      <h5>{count}</h5>
      <div>
        <button id='less' onClick={() => handleDecrement()}>
          -
        </button>
        <button id='more' onClick={() => setCount(count + 1)}>
          +
        </button>
      </div>
    </section>
  )
}

export default NumberOfPets
