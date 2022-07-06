import "./Pet.css";

export const Pet = ({ name, kind, breed }) => {
  return (
    <div className="pet">
      <p><span>Name:</span> <span className="item__value">{name}</span> </p>
      <p><span>Breed:</span> <span className="item__value">{breed}</span> </p>
      <p><span>Kind:</span> <span className="item__value">{kind}</span> </p>
    </div>
  );
};

export default Pet;
