import "./Pet.css";

export const Pet = ({ name, kind, breed }) => {
  return (
    <div className="pet">
      <h3>{name}</h3>
      <h4>{breed}</h4>
      <h5>{kind}</h5>
    </div>
  );
};

export default Pet;