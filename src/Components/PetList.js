import React, { useEffect, useState } from "react";
import Pet from "./Pet";
import "./PetList.css";

const BASE_URL = "https://vet-resource-api-9-2.herokuapp.com/api/pets";

const PetList = () => {
  const [petList, setPetList] = useState([]);

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => setPetList(data));
  }, []);

  return (
    <section className="pet-list">
      <h4>All Pets</h4>
      <article>
        {petList.map(({ name, breed, kind }) => {
          return <Pet name={name} breed={breed} kind={kind} />;
        })}
      </article>
    </section>
  );
};

export default PetList;
