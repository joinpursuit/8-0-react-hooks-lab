import React, {useState} from "react";
import Pet from "./Pet";
import "./PetList.css";

const BASE_URL = "https://vet-api-8-1.herokuapp.com";

const PetList = () => {

    return (
      <section className="pet-list">
        <h4>All Pets</h4>
        <article></article>
      </section>
    );
  
}

export default PetList;
