import "./Pet.css";

 const Pet = ({pet:{name, breed, kind}}) => {
  // const {name, breed, kind} = props.pet
  return (
    <div className="pet">
      <h3>{name}</h3>
      <h4>{breed}</h4>
      <h5>{kind}</h5>
    </div>
  );
};

export default Pet;
