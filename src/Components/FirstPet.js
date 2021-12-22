import { useState }from "react";
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

function FirstPet (){
  const [firstPet, setFirstPet] = useState(false);

  const handleInput =(e)=>{
    setFirstPet(e.target.checked);
  }

  return (
    <section className="first-pet">
      <h4>Is this your first pet?</h4>
      <br />
      <form>
        <input type="checkbox" onClick={handleInput}/>
      </form>
      <h5>{ firstPet ? "Yes" : "No" }</h5>
    </section>
  )
}



export default FirstPet;
