import "./Pet.css";

export default function Pet({ name, kind, breed }) {
  return (
    <div className="pet">
      <h3>{name}</h3>
      <h4>{breed}</h4>
      <h5>{kind}</h5>
    </div>
  );
}
