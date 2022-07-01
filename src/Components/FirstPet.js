import React, {useState} from "react";
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



function FirstPet() {
  const [checked, setChecked] = useState(false)


  const handleChange = (e) => {
    if (e.target.checked) {
      setChecked(true)
    } else{
      setChecked(false)
    }
  };
  return (
    <section className="first-pet">
      <h4>Is this your first pet?</h4>
      <br />
      <form>
          <input type="checkbox"  onChange={handleChange}/>
         {checked ? <h5>Yes</h5> : <h5>No</h5>}
      </form>
      <h5></h5>
    </section>
  )
}

export default FirstPet;
