import "./Pet.css";

const Pet = (props) => {
  return (
    <div className="pet">
      <h3>{props.name}</h3>
      <h4>{props.breed}</h4>
      <h5>{props.kind}</h5>
    </div>
  );
};

export default Pet;
