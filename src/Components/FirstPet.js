import React, { useState } from "react";
import "./FirstPet.css";

const FirstPet = () => {
  const [ firstPet, setFirstPet ] = useState(false);

  const handleCheckbox = () => {
    setFirstPet(!firstPet);
  }

  return (
    <section className="first-pet">
      <h4>Is this your first pet?</h4>
      <br />
      <form>
        <input type="checkbox" onClick={handleCheckbox} />
      </form>
      <h5>{firstPet ? <div>Yes</div> : <div>No</div>}</h5>
    </section>
  )
}

// class FirstPet extends React.Component {
//   render() {
//     return (
//       <section className="first-pet">
//         <h4>Is this your first pet?</h4>
//         <br />
//         <form>
//           <input type="checkbox" />
//         </form>
//         <h5></h5>
//       </section>
//     );
//   }
// }

export default FirstPet;
