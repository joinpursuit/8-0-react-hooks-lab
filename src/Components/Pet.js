import "./Pet.css";

// DECONSTRUCTING DONE INSIDE ({ })
export const Pet = ({ name, kind, breed }) => {
  return (
    // RECEIVING PROPS FROM PARENT 
    <div className="pet">
      <h3>{name}</h3>
      <h4>{breed}</h4>
      <h5>{kind}</h5>
    </div>
  );
};
/**....//
 * export const Pet = (props) => {
 * const {name, kind, breed} = props.animal
  return (
    // RECEIVING PROPS FROM PARENT 
    <div className="pet">
      <h3>{name}</h3>
      <h4>{breed}</h4>
      <h5>{kind}</h5>
    </div>
  );
}; 
 */

export default Pet;
