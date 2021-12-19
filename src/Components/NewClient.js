import React from "react";
import { useState } from "react";
import "./NewClient.css";

const NewClient = () => {
  const [newClientForm, setNewClientForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: ""
  })

  const handleForm = (event) => {
    setNewClientForm({ ...newClientForm, [event.target.name]: event.target.value })
  }

  console.log(newClientForm)

  return (
    <section className="new-client">
      <h4>New Client Info</h4>
      <div>
        <form>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            onChange={handleForm}
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            onChange={handleForm}
          />
          <label htmlFor="phone">Telephone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            onChange={handleForm}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleForm} />
        </form>
        <article>
          <h5>{newClientForm.firstName}</h5>
          <h5>{newClientForm.lastName}</h5>
          <h5>{newClientForm.phone}</h5>
          <h5>{newClientForm.email}</h5>
        </article>
      </div>
    </section>
  );
}

export default NewClient;
