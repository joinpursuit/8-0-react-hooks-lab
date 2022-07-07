import React from "react";
import { useState } from "react";
import "./NewClient.css";

const NewClient = () => {
  const [firstName, setFirst] = useState("");
  const [lastName, setLast] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const fieldChange = (e) => {
    if (e.target.id === "firstName") {
      setFirst(e.target.value);
    }
    if (e.target.id === "lastName") {
      setLast(e.target.value);
    }
    if (e.target.id === "phone") {
      setPhone(e.target.value);
    }
    if (e.target.id === "email") {
      setEmail(e.target.value);
    }
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
            value={firstName}
            onChange={fieldChange}
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={fieldChange}
          />
          <label htmlFor="phone">Telephone</label>
          <input type="tel" id="phone" value={phone} onChange={fieldChange} />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={email} onChange={fieldChange} />
        </form>
        <article>
          <h5>{firstName}</h5>
          <h5>{lastName}</h5>
          <h5>{phone}</h5>
          <h5>{email}</h5>
        </article>
      </div>
    </section>
  );
};
export default NewClient;
