import { useState, useEffect, React } from "react";
import Pet from "./Pet";
import "./PetList.css";

const BASE_URL = "https://vet-resource-api-9-2.herokuapp.com/api/pets";

export default function PetList() {
  const [pets, setPets] = useState([]);
  useEffect(() => {
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((data) => setPets(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="pet-list">
      <h4>All Pets</h4>
      {pets.map((pet) => {
        return (
          <article>
            {" "}
            <Pet name={pet.name} breed={pet.breed} kind={pet.kind} />{" "}
          </article>
        );
      })}
    </section>
  );
}
