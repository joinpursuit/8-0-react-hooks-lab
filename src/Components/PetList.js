import React, { useState, useEffect } from "react";
import Pet from "./Pet";
import "./PetList.css";

const BASE_URL = "http://localhost:5000/api";
const API = "https://vet-api-8-1.herokuapp.com/api/pets";

const PetList = () => {
  const [petData, setData] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => {
        throw error;
      });
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
};

export default PetList;
