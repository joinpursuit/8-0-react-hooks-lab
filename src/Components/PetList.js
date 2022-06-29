import React from "react";
import { useState, useEffect } from "react";
import Pet from "./Pet";
import "./PetList.css";

const BASE_URL = "https://vet-lab-8-4.herokuapp.com/api/pets";

const PetList = () => {
  const [allPets, setAllPets] = useState([]);

  useEffect(() => {
    fetch(BASE_URL)
    .then(res => res.json())
    .then(data => setAllPets(data))
  }, [])

    return (
      <section className="pet-list">
        <h4>All Pets</h4>
        <article>
          {allPets.map(pet => {
          return <Pet name={pet.name} kind={pet.kind} breed={pet.breed} key={pet.id}/>
          })}
        </article>
      </section>
    );
}

export default PetList;
