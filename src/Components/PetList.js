import { useState, useEffect } from "react";
import Pet from "./Pet";
import "./PetList.css";

const PetList = () => {
  const BASE_URL = "http://localhost:5000/api/pets";
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
        {pets.map((pet) => (
          <Pet pet={pet} key={pet.id} />
        ))}
      </article>
    </section>
  );
};

export default PetList;
