import React, {useState, useEffect} from "react";
import Pet from "./Pet";
import "./PetList.css";

// const BASE_URL = "http://localhost:5000/api";
const BASE_URL = "https://raw.githubusercontent.com/joinpursuit/resource-veterinarian-api/main/data/db.json";

const PetList = () => {
    return (
      <section className="pet-list">
        <h4>All Pets</h4>
        <article></article>
      </section>
    );
}

export default PetList;
