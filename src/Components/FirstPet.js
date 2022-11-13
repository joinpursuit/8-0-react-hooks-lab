import React from "react";
import "./FirstPet.css";
import { useState } from "react";

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

function FirstPet(){
  const [checked,setchecked]=useState(false)

  return (
          <section className="first-pet">
            <h4>Is this your first pet?</h4>
            <br />
            <form>
              <input type="checkbox" onChange={()=> setchecked(!checked)} />
            </form>
            <h5>{checked ? "Yes" : "No"}</h5>
          </section>
        );
}


export default FirstPet;
