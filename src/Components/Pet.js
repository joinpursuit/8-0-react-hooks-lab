import "./Pet.css";

export const Pet = ({ animal }) => {
  return (
    <div className="pet">
      <h3>{animal.name}</h3>
      <h4>{animal.breed}</h4>
      <h5>{animal.kind}</h5>
    </div>
  );
};

export default Pet;
