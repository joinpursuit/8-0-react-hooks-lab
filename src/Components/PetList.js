import React, { useEffect, useState } from 'react'
import Pet from './Pet'
import './PetList.css'

// const BASE_URL = 'http://localhost:5000/api'

function PetList() {
  const [petData, setPetData] = useState([])

  useEffect(() => {
    fetch('https://serene-tundra-77911.herokuapp.com/api/pets')
      .then((result) => result.json())
      .then((data) => setPetData(data))
      .catch((error) => console.log(error))
  }, [])

  return (
    <section className='pet-list'>
      <h4>All Pets</h4>
      <article>
        {petData.map((pet) => {
          return <Pet name={pet.name} kind={pet.kind } breed={pet.breed} />
        })}
      </article>
    </section>
  )
}

export default PetList
