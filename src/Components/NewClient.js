import React, { useState } from "react";
import "./NewClient.css";

const NewClient = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault()

  // };

  return (
    <section className="new-client">
      <h4>New Client Info</h4>
      <div>
        <form>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          <label htmlFor="phone">Telephone</label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
        </form>
        <article>
          <h5>{formData.firstName}</h5>
          <h5>{formData.lastName}</h5>
          <h5>{formData.phone}</h5>
          <h5>{formData.email}</h5>
        </article>
      </div>
    </section>
  );
};

export default NewClient;
