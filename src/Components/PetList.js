import React from "react";
import Pet from "./Pet";
import "./PetList.css";

const BASE_URL = "http://localhost:5000/api";

const PetList = ({petProfile}) => {

    return (
      <section className="pet-list">
        <h4>All Pets</h4>
        <article>
          
          {petProfile.map((pet)=>{
           return( <div className="pet-list">{pet.name}</div>)
          })}
        </article>
      </section>
    );
}

export default PetList;
