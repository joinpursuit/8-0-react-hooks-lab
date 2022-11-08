import React, { useState } from "react";
import "./NewClient.css";

//  class NewClient extends React.Component {
//    render() {

//      const [client, setClient] = useState({
//        firstName: "",
//        lastName: "",
//        phone: "",
//        email: "",
//      });
//      const {firstName, lastName, phone, email} = client;
//      function handleChange(){
//        const NewClient = {...}
//      }
//      return (
//        <section className="new-client">
//          <h4>New Client Info</h4>
//          <div>
//            <form>
//              <label htmlFor="firstName">First Name</label>
//              <input
//              type="text"
//              id="firstName"
//              value={firstName}
//              onChange/>
//              <label htmlFor="lastName">Last Name</label>
//              <input type="text" id="lastName" />
//              <label htmlFor="phone">Telephone</label>
//              <input type="tel" id="phone" />
//              <label htmlFor="email">Email</label>
//              <input type="email" id="email" />
//            </form>
//            <article>
//              <h5>firstName: {firstName}</h5>
//              <h5>lastName: {lastName}</h5>
//              <h5>phone: {phone}</h5>
//              <h5>email: {email}</h5>
//            </article>
//          </div>
//        </section>
//      );
//    }
//  }



const NewClient = () => {
  const [client, setClient] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const { firstName, lastName, phone, email } = client;

  function handleChange(e) {
    const NewClient = { ...client, [e.target.id]: e.target.value };
    setClient(NewClient);
  }
  return (
    <section className="new-client">
      <h4>New Client Info</h4>
      <div>
        <form>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={handleChange}
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={handleChange}
          />
          <label htmlFor="phone">Telephone</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={handleChange}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleChange}
          />
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
};

export default NewClient;
