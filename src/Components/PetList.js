import React, { useState, useEffect } from "react";
import Pet from "./Pet";
import "./PetList.css";

const BASE_URL = "https://vet-api-8-1.herokuapp.com/api/pets";

export default function PetList() {
  const [ pets, setPets ] = useState([]);

  useEffect(() => {
    handleFetch();
  }, []);

  const handleFetch = () => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setPets(data)
      })
  }
  return (
    <section className="pet-list">
      <h4>All Pets</h4>
      <article>
        {pets.map((pet, i) => <Pet key={i} name={pet.name} breed={pet.breed} kind={pet.kind} />)}
      </article>
    </section>
  )
}