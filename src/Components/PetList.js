import React, { useEffect, useState } from "react";
import Pet from "./Pet";
import "./PetList.css";

const BASE_URL = "https://vet-api-8-1.herokuapp.com/api/pets";

const PetList = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        setPets(data);
      });
  }, []);

  const petElements = pets.map((pet) => {
    return <Pet pet={pet} />;
  });

  return (
    <section className="pet-list">
      <h4>All Pets</h4>
      <article>{petElements}</article>
    </section>
  );
};

export default PetList;
