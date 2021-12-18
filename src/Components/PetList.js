import React, { useEffect } from 'react';
import Pet from './Pet';
import './PetList.css';

const PetList = ({ petsList, setPetsList }) => {
  useEffect(() => {
    (async () => {
      let response = await fetch('https://vet-api-8-1.herokuapp.com/api/pets');
      response = await response.json();
      const data = response.map(({ name, breed, kind }) => {
        return <Pet name={name} breed={breed} kind={kind} />;
      });
      setPetsList(data);
    })();
  }, []);

  return (
    <section className="pet-list">
      <h4>All Pets</h4>
      <article>{petsList}</article>
    </section>
  );
};

export default PetList;
