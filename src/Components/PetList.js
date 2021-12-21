import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import Pet from "./Pet";
import "./PetList.css";

const BASE_URL = "  http://localhost:3000/pets";

const PetList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let res = await fetch(BASE_URL);
    let apiData = await res.json();
    setData(apiData);
  };

  let items = data.map((item) => {
    return <Pet key={item.id} info={item} />;
  });

  return (
    <section className="pet-list">
      <h4>All Pets</h4>
      <article>
        <ol>{items}</ol>
      </article>
    </section>
  );
};

export default PetList;
