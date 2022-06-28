import React from "react";
import "./FirstPet.css";

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

export default function FirstPet() {
  return (
    <section className="first-pet">
      <h4>Is this your first pet?</h4>
      <br />
      <form>
        <input type="checkbox" />
      </form>
      <h5></h5>
    </section>
  );
}