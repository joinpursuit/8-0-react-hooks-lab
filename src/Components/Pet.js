import './Pet.css';

const Pet = ({
  pet: {
    name = 'unknown',
    kind = 'unknown',
    breed = 'unknown',
    key: id = 'noId',
  },
}) => {
  return (
    <div className="pet" key={id}>
      <h3>{name}</h3>
      <h4>{breed}</h4>
      <h5>{kind}</h5>
    </div>
  );
};

export default Pet;
