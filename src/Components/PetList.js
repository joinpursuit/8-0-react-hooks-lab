import React from 'react';
import Pet from './Pet';
import './PetList.css';
import { useEffect, useState } from 'react';

//const BASE_URL = 'http://localhost:5000/api';

function PetList() {
  const [petInfo, setPetInfo] = useState([]);

  useEffect(() => {
    fetch('https://serene-tundra-77911.herokuapp.com/api/pets')
      .then((res) => res.json())
      .then((data) => setPetInfo(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="pet-list">
      <h4>All Pets</h4>
      <article>
        {petInfo.map((pet) => {
          return <Pet name={pet.name} kind={pet.kind} breed={pet.breed} />;
        })}
      </article>
    </section>
  );
}

export default PetList;
