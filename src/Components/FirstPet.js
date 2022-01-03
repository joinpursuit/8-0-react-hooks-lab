import React from "react";
import {useState} from 'react'
import "./FirstPet.css";

const FirstPet=()=>{
  const[firstPet, setPet] = useState(false)
  
  const handleCheckBox=(e)=>{
    setPet(e.target.checked);
  }

  return (
      <section className="first-pet">
          <h4>Is this your first pet?</h4>
          <br />
          <form>
            <input type="checkbox" checked={firstPet} onChange={handleCheckBox}/>
          </form>
          {firstPet && <h5>Yes</h5>}
          {!firstPet && <h5>No</h5>}
      </section>
    );
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
