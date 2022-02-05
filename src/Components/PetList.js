import React, { useEffect, useState } from "react";
import "./PetList.css";
import Pet from "./Pet";

// const BASE_URL = "http://localhost:5000/api";

function PetList() {
  const [petData, setPetData] = useState([]);

  useEffect(() => {
    fetch("https://vet-api-8-1.herokuapp.com/api/pets")
      .then((res) => res.json())
      .then((data) => setPetData(data));
  }, []);
  return (
    <section className="pet-list">
      <h4>All Pets</h4>
      <article>
        {petData.map((pet) => (
          <Pet name={pet.name} breed={pet.breed} kind={pet.kind} />
        ))}
      </article>
    </section>
  );
}

export default PetList;
