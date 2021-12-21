import "./Pet.css";
import React from "react";

export const Pet = (props) => {
  let { name, kind, breed } = props.info;
  return (
    <div className="pet">
      <h3>{name}</h3>
      <h4>{breed}</h4>
      <h5>{kind}</h5>
    </div>
  );
};

export default Pet;
