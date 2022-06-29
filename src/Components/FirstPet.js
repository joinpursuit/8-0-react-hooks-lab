import React from "react";
import "./FirstPet.css";
import { useState } from "react";

export default function FirstPet() {

    const [checked, setChecked] = useState(false);
  
  const handleChange = (e) => {

    setChecked(!checked)
  
  }
  
    return (
      <section className="first-pet">
        <h4>Is this your first pet?</h4>
        <br />
        <form>
          <input type="checkbox" onChange={ handleChange }/>
          <p>
            { checked ? 'Yes' : 'No'}
          </p>
        </form>
        {/* <h5></h5> */}
      </section>
    );
  }




// import { useState } from "react";
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