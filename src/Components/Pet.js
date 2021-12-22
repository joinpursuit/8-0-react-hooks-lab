import "./Pet.css";
import { useState, useEffect } from "react";

const Pet = (props) => {
  const [animal, setAnimal] = useState({});
  useEffect(() => {
    setAnimal(props.pet);
  }, [props.pet]);
  const { name, kind, breed } = animal;
  return (
    <div className="pet">
      <h3>{name}</h3>
      <h4>{breed}</h4>
      <h5>{kind}</h5>
    </div>
  );
};

export default Pet;
