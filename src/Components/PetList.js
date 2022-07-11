import React, {useState, useEffect} from "react";
import Pet from "./Pet";
import "./PetList.css";

const BASE_URL = "https://vet-api-8-1.herokuapp.com/api/pets";

const PetList = () => {
  const [petData, setPetData] = useState([])
  useEffect(() => {
    fetch(BASE_URL)
    .then((res) => res.json())
    .then((data) => setPetData(data))
    .catch((err) => {throw err})
  }, [])
    return (
      <section className="pet-list">
        <h4>All Pets</h4>
        <article>
          {petData.map((pet) => <Pet name={pet.name} breed={pet.breed} kind={pet.kind} /> )}
        </article>
      </section>
    );
}

export default PetList;
