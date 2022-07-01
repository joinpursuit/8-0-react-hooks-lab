import React from 'react';
import './NewClient.css';
import { useState } from 'react';

function NewClient() {
  const [contact, setContact] = useState({
    firstName: '',
    lastName: '',
    telephone: '',
    email: '',
  });

  const handleFirstName = (event) => {
    setContact({ ...contact, firstName: event.target.value });
  };

  const handleLastName = (event) => {
    setContact({ ...contact, lastName: event.target.value });
  };

  const handleEmail = (event) => {
    setContact({ ...contact, email: event.target.value });
  };

  const handleTelephone = (event) => {
    setContact({ ...contact, telephone: event.target.value });
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
            value={contact.firstName}
            onChange={handleFirstName}
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={contact.lastName}
            onChange={handleLastName}
          />
          <label htmlFor="phone">Telephone</label>
          <input
            type="tel"
            id="phone"
            value={contact.telephone}
            onChange={handleTelephone}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={contact.email}
            onChange={handleEmail}
          />
        </form>
        <article>
          <h5>First Name: {contact.firstName}</h5>
          <h5>Last Name: {contact.lastName}</h5>
          <h5>Telephone: {contact.telephone}</h5>
          <h5>Email: {contact.email}</h5>
        </article>
      </div>
    </section>
  );
}

export default NewClient;
