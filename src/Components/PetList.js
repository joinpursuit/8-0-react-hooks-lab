import React, { useEffect, useState } from 'react';
import Pet from './Pet';
import './PetList.css';

const BASE_URL = 'https://serene-tundra-77911.herokuapp.com/api/pets';

const PetList = () => {
  const [petData, setPetData] = useState([]);
  const fetchData = () => {
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((data) => setPetData(data))
      .catch((error) => console.warn(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className='pet-list'>
      <h4>All Pets</h4>
      <article>
        {petData.map((animal) => {
          return <Pet key={animal.id} name={animal.name} />;
        })}
      </article>
    </section>
  );
};

export default PetList;
