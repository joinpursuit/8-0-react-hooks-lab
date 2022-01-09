import React, { useEffect, useState } from "react";
import Pet from "./Pet";
import "./PetList.css";

const BASE_URL = "https://vet-api-8-1.herokuapp.com/api/pets";

const PetList = () => {
  const [data, setData] = useState([]);

    useEffect(() => {
      fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      })
    }, [])

    const display = data.map((eachAnimal) => {
      return <Pet name={eachAnimal.name} breed={eachAnimal.breed} kind={eachAnimal.kind} />
    })
    return (
      <section className="pet-list">
        <h4>All Pets</h4>
        <article>{display}</article>
      </section>
    );
  }

export default PetList