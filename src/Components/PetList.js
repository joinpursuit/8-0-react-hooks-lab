import React, { useState } from "react";
import Pet from "./Pet";
import "./PetList.css";
import { useEffect } from "react";

const BASE_URL = "https://vet-api-8-1.herokuapp.com/api/pets";

const PetList = () => {
  const [animalList, setList] = useState([]);

  useEffect(() => {
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((data) => setList(data));
  }, []);

  console.log(animalList);

  const displayInfo = animalList.map((pet, i) => {
    return (
      <Pet
        key={i + "hello"}
        name={pet.name}
        breed={pet.breed}
        kind={pet.kind}
      />
    );
  });

  return (
    <section className="pet-list">
      <h4>All Pets</h4>
      <article>{displayInfo}</article>
    </section>
  );
};

export default PetList;
