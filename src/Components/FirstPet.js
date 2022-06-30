import React, {useState} from 'react';
import "./FirstPet.css";

export default function FirstPet() {

  const [checked, setChecked] = useState(false); 
  
  const handleChange = () => { 
    setChecked(!checked); 
  }; 

  return (
    <section className="first-pet">
    <h4>Is this your first pet?</h4>
    <br />
    <form>
      <input type="checkbox" onChange={handleChange} />
      <p>
        {checked ? 'Yes' : 'No'}
      </p>
    </form>
    <h5></h5>
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

