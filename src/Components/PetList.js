import React from "react";
import Pet from "./Pet";
import "./PetList.css";
import { useState, useEffect } from "react";

const BASE_URL = "https://vet-api-8-1.herokuapp.com/api/pets";

const PetList = () => {
  const [data, setData] = useState([])
// USE EFFECT ACTS LIKE COMPONENT DID MOUNT, COMPONENT DID UPDATE, AND COMPONENT WILL UNMOUNT ALL IN ONE
  useEffect(() => {
    fetch(BASE_URL)
    .then((response) => response.json())
    .then((info) => {
      setData(info)
    })
  }, [])
//  IF NO SECOND ARG, EFFECT WILL RUN AFTER EVERY RENDER CYCLE. []:EFFECT WILL RUN ONCE, [STATE]:EFFECT WILL RE-RUN WHEN STATE CHANGES
  const result = data.map((animal) => {
    return <Pet name={animal.name} breed={animal.breed} kind={animal.kind} />
    // return <Pet animal={animal}/>...//
  })
  // SENDING PROPS TO CHILD <PET
    return (
      <section className="pet-list">
        <h4>All Pets</h4>
        <article>{result}</article>
      </section>
    );
  }

export default PetList;
