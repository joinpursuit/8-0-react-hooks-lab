import React from "react";
import "./NewClient.css";
import { useState } from "react";
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

function NewClient() {
  const [client, setClient] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const { firstName, lastName, phone, email } = client;

  function handleChange(e) {
    const newClient = { ...client,[e.target.id]:e.target.value };
    // newClient[e.target.id] = e.target.value;
    setClient(newClient);
  }

  // e.target;

  return (
    <section className="new-client">
      <h4>New Client Info</h4>
      <div>
        <form>
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" onChange={handleChange} />
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" onChange={handleChange} />
          <label htmlFor="phone">Telephone</label>
          <input type="tel" id="phone" onChange={handleChange} />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={handleChange} />
        </form>
        <article>
          <h5>firstName: {firstName}</h5>
          <h5>lastName: {lastName}</h5>
          <h5>phone: {phone}</h5>
          <h5>email: {email}</h5>
        </article>
      </div>
    </section>
  );
}

export default NewClient;
