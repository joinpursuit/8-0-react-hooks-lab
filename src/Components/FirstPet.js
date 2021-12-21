import React, { useState } from "react";
import "./FirstPet.css";

export default function FirstPet() {
  const [ hasPet, setHasPet ] = useState(true);

  const handleYesOrNo = (e) => {setHasPet(e.target.checked)};

  return (
    <section className="first-pet">
        <h4>Is this your first pet?</h4>
        <br />
        <form>
          <input type="checkbox" onChange={handleYesOrNo} checked={hasPet}/>
        </form>
        <h5>{hasPet ? "Yes" : "No"}</h5>
    </section>
  )
}


// class FirstPet extends React.Component {
//   constructor(){
//     super();
//     this.state = {
//       hasPet: true
//     }
//   }

//   handleYesOrNo = (e) => {
//     this.setState({
//       hasPet: e.target.checked,
//     })
//   } 

//   render() {
//     return (
//       <section className="first-pet">
//         <h4>Is this your first pet?</h4>
//         <br />
//         <form>
//           <input type="checkbox" onChange={this.handleYesOrNo} checked={this.state.display}/>
//         </form>
//         <h5>{ this.state.hasPet ? "Yes"
//           : "No"}</h5>
//       </section>
//     );
//   }
// }

// export default FirstPet;
