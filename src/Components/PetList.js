import React, { useState, useEffect } from "react";
// import Pet from "./Pet";
import "./PetList.css";


const BASE_URL = "https://vet-api-8-1.herokuapp.com/api/pets";

const PetList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((info) => {
        setData(info);
      });
  }, []);
  console.log(data)

  return (
    <section className="pet-list">
      <h4>All Pets</h4>
      <article>
          {data.map(el => {
            return (
              <div key={el.id} id={el.id}>
                <ul>
                  <li><span>Name: </span>{el.name}</li>
                <li><span>Breed: </span>{el.breed}</li>
                <li><span>Kind: </span>{el.kind}</li>
                </ul>
              </div>
            )
          }
          )}
        
      </article>
    </section>
  );

}

export default PetList;
