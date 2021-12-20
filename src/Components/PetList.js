import React, { useState, useEffect } from "react";
import Pet from "./Pet";
import "./PetList.css";

const BASE_URL = "http://localhost:5000/api";
const API = 'https://vet-api-8-1.herokuapp.com/api/pets';

function PetList() {
  const [ petData, setPetData ] = useState([]);

  useEffect(() => {
    fetch(API)
    .then(res => res.json())
    .then(data => setPetData(data))
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
