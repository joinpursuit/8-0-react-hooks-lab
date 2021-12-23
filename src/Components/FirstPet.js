import React from "react";
import "./FirstPet.css";

const FirstPet=()=>{
  const[firstPet, setPet] = useState(false)
  
  handleCheckBox=()=>{

  }

  return (
      <section className="first-pet">
          <h4>Is this your first pet?</h4>
          <br />
          <form>
            <input type="checkbox" onChange={handleCheckBox}/>
          </form>
          <h5></h5>
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
