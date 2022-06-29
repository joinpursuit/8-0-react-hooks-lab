import { useEffect, useState } from "react";
import axios from "axios";
import Pet from "./Pet";
import "./PetList.css";

const BASE_URL = `http://serene-tundra-77911.herokuapp.com/api/pets`;

const PetList = () => {
  const [pets, setPets] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    axios
      .get(BASE_URL)
      .then((res) => {
        setPets([...res.data]);
        renderPets(pets);
      })
      .catch((err) => {
        errors(err);
      });
  }, []); // eslint-disable-line

  const renderPets = (pets) => {
    const petList = pets.map((pet) => {
      return (
        <Pet key={pet.id} name={pet.name} breed={pet.breed} kind={pet.kind} />
      );
    });
    return petList;
  };

  const errors = (err) => {
    setError(err);
  };

  return (
    <section className="pet-list">
      <h4>All Pets</h4>
      <article>
        {error && <p>{error}</p>}
        {renderPets(pets)}
      </article>
    </section>
  );
};

export default PetList;
