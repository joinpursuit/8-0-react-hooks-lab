import React from "react";
import Pet from "./Pet";
import "./PetList.css";
import { useState, useEffect } from "react";

const BASE_URL = "https://serene-tundra-77911.herokuapp.com/api/pets";

const PetList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((data) => setList(data));
  }, []);

  console.log(list)

  return (
    <section className="pet-list">
      <h4>All Pets</h4>
      <article>
        {list.map((animal) => {
          return <Pet animal={animal} />;
        })}
      </article>
    </section>
  );
};

export default PetList;
