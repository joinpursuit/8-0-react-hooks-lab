import "./Pet.css";

export const Pet = ({ pet: { name, kind, breed } }) => {
  return (
    <div className="pet">
      <ol>
        <li>{name}</li>
        <li>{breed}</li>
        <li>{kind}</li>
      </ol>
    </div>
  );
};

export default Pet;
