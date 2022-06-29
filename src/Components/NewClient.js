import React from "react";
import "./NewClient.css";
import { useState } from "react";

export default function NewClient() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState("");

  const handleChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };
  
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="new-client">
      <h4>New Client Info</h4>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" onChange={ handleChangeFirstName }/>
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" onChange={ handleChangeLastName }/>
          <label htmlFor="phone">Telephone</label>
          <input type="tel" id="phone" onChange={ handleChangePhone }/>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={ handleChangeEmail }/>
        </form>
        <article>
          <h5>{ firstName }</h5>
          <h5>{ lastName }</h5>
          <h5>{ phone }</h5>
          <h5>{ email }</h5>
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
