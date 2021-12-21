import React, { useEffect, useState } from 'react';
import Pet from './Pet';
import './PetList.css';

const BASE_URL = 'http://localhost:5000/api';

const PetList = () => {
  const [pets, setPet] = useState([]);
  useEffect(() => {
    fetch(BASE_URL + '/pets/')
      .then((res) => res.json())
      .then((petData) => setPet(petData))
      .catch((error) => {
        console.log(error);
        setPet([]);
      });
  }, []);

  return (
    <section className="pet-list">
      <h4>All Pets</h4>
      <article>
        {pets.map((pet) => (
          <Pet pet={pet} />
        ))}
      </article>
    </section>
  );
};

export default PetList;
