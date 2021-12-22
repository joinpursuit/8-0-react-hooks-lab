import React from "react";
import Pet from "./Pet";
import "./PetList.css";
import { useState, useEffect } from "react";

const PetList = () => {
  const BASE_URL = "https://vet-api-8-1.herokuapp.com/api/pets";
  const [data, setPetData] = useState([]);

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => setPetData(data));
  }, []);

  const displayData = data.map((pet) => {
    return (
      <Pet
        className="Pet-list"
        key={pet.id}
        name={pet.name}
        breed={pet.breed}
        kind={pet.kind}
      />
    );
  });

  return (
    <section className="pet-list">
      <h4>All Pets</h4>
      <article>{displayData}</article>
    </section>
  );
};

export default PetList;
