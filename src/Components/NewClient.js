import React, { useState } from "react";
import "./NewClient.css";

export default function NewClient (){
  const [clientInfo,setClientInfo] = useState({
    firstName:"",lastName:"",phone:"",email:""
  });
  const handleInfoOnChange = (evt)=>{
    setClientInfo({...clientInfo,[evt.target.id]:evt.target.value});
  }
  //////////////////////////////////////////////////
  return (
    <section className="new-client">
      <h4>New Client Info</h4>
      <div>
        <form>
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" onChange={handleInfoOnChange} />
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" onChange={handleInfoOnChange} />
          <label htmlFor="phone">Telephone</label>
          <input type="tel" id="phone" onChange={handleInfoOnChange} />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={handleInfoOnChange} />
        </form>
        <article>
          <h5>{clientInfo.firstName}</h5>
          <h5>{clientInfo.lastName}</h5>
          <h5>{clientInfo.phone}</h5>
          <h5>{clientInfo.email}</h5>
        </article>
      </div>
    </section>
  );
}

// class NewClient extends React.Component {
//   render() {
//     return (
//       <section className="new-client">
//         <h4>New Client Info</h4>
//         <div>
//           <form>
//             <label htmlFor="firstName">First Name</label>
//             <input type="text" id="firstName" />
//             <label htmlFor="lastName">Last Name</label>
//             <input type="text" id="lastName" />
//             <label htmlFor="phone">Telephone</label>
//             <input type="tel" id="phone" />
//             <label htmlFor="email">Email</label>
//             <input type="email" id="email" />
//           </form>
//           <article>
//             <h5>firstName</h5>
//             <h5>lastName</h5>
//             <h5>phone</h5>
//             <h5>email</h5>
//           </article>
//         </div>
//       </section>
//     );
//   }
// }

// export default NewClient;
