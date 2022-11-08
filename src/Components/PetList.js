import React, { useEffect, useState } from "react";
import Pet from "./Pet";
import "./PetList.css";

// const BASE_URL = "http://localhost:5000/api";
const BASE_URL = "https://vet-resource-api-9-2.herokuapp.com/api/pets";

function PetList() {
  const [pets, setPets] = useState([]);
  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => setPets(data));
  }, []);
  return (
    <section className="pet-list">
      <h4>All Pets</h4>
      <article>
        {pets.map((pet, i) => (
          <Pet pet={pet} key={i} />
        ))}
      </article>
    </section>
  );
}

export default PetList;
