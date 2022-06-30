import { useState } from 'react'
import './AnimalTypes.css'

// const animalTypes = ['dog', 'cat', 'ferret', 'bird', 'fish', 'snake', 'lizard']

function AnimalTypes() {
  const animalTypes = [
    'dog',
    'cat',
    'ferret',
    'bird',
    'fish',
    'snake',
    'lizard',
  ]
  const [inputAnimal, setInputAnimal] = useState('')

  const [animalsList, setAnimalsList] = useState(animalTypes)

  const handleChange = (event) => {
    setInputAnimal(event.target.value.toLowerCase())
  }

  const addAnimal = (userInput) => {
    const newAnimal = [...animalsList, userInput]
    setAnimalsList(newAnimal)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!animalsList.includes(inputAnimal)) addAnimal(inputAnimal)

    setInputAnimal('')
  }

  const handleClick = (index) => {
    let newList = [...animalsList]

    newList.splice(index, 1)

    setAnimalsList(newList)
  }
  return (
    <section className={'animal-types'}>
      <h4>Animal Types</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor='type'>
          <input
            type='text'
            id='animal-type'
            value={inputAnimal}
            onChange={handleChange}
          />
        </label>
        <input type='submit' />
      </form>
      <br />
      <ol>
        {animalsList.map((animal, index) => {
          return (
            <li key={index}>
              {animal}
              <button onClick={() => handleClick(index)}>Remove</button>
            </li>
          )
        })}
      </ol>
    </section>
  )
}

export default AnimalTypes
