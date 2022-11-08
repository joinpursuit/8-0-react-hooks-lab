import React, { useState } from "react";
import "./FirstPet.css";


export default function FirstPet(){
  const [firstPet,updateFirstPet] = useState(false);
  const handleOnChange = (evt)=>{
    updateFirstPet(pv=>!pv);
  }
  //////////////////////////////////////////////////
  return (
    <section className="first-pet">
        <h4>Is this your first pet?</h4>
        <br />
        <form>
          <input type="checkbox" onChange={handleOnChange} />
        </form>
        <h5>{firstPet?"Yes":"No"}</h5>
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

// export default FirstPet;
