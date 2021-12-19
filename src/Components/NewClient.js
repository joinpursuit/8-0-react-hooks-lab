import React, { useState } from "react";
import "./NewClient.css";

const NewClient = () => {
  const [clientInfo, setInfo] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const handleClientInfo = (event) => {
    setInfo({ ...clientInfo, [event.target.id]: event.target.value });
  };

  return (
    <section className="new-client">
      <h4>New Client Info</h4>
      <div>
        <form>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            onChange={(event) => handleClientInfo(event)}
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            onChange={(event) => handleClientInfo(event)}
          />
          <label htmlFor="phone">Telephone</label>
          <input
            type="tel"
            id="phone"
            onChange={(event) => handleClientInfo(event)}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            onChange={(event) => handleClientInfo(event)}
          />
        </form>
        <article>
          <h5>First Name: {clientInfo.firstName}</h5>
          <h5>Last Name: {clientInfo.lastName}</h5>
          <h5>Phone Number: {clientInfo.phone}</h5>
          <h5>Email: {clientInfo.email}</h5>
        </article>
      </div>
    </section>
  );
};

export default NewClient;
