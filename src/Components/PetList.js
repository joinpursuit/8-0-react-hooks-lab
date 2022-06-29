import React, { useState, useEffect } from "react";
import Pet from "./Pet";
import "./PetList.css";

const BASE_URL = "https://vet-lab-8-4.herokuapp.com/api";

export default function PetList() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/pets`)
      .then((response) => response.json())
      .then((data) => setPets(data))
      .catch((error) => console.log(error));
  }, []);


  return (
    <section className="pet-list">
      <h4>All Pets</h4>
      <article>
        {pets.map((pets) => {
          return <Pet name={pets.name} kind={pets.kind} breed={pets.breed} />;
        })}
      </article>
    </section>
  );
}
