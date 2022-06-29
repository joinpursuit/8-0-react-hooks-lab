import React, { useState } from "react";
import "./FirstPet.css";

//need to make a yes/no checkbox->text
//do on click or show text

export default function FirstPet() {
  const [checkBoxStatus, setCheckBoxStatus] = useState(false);

  const handleClick = () => {
    setCheckBoxStatus(!checkBoxStatus);
  };

  const showText = () => {
    if (checkBoxStatus) {
      return "Yes";
    } else {
      return "No";
    }
  };

  return (
    <section className="first-pet">
      <h4>Is this your first pet?</h4>
      <br />
      <form>
        <input onClick={handleClick} type="checkbox" />
      </form>
      <h5>{showText()}</h5>
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

// export default FirstPet;
