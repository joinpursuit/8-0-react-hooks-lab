import React, { useState } from "react";
import "./NewClient.css";

const NewClient = () => {

  const [ handleForm, setHandleForm ] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: ""
  })

  const handleInputs = (event) => {
    setHandleForm({...handleForm, [event.target.name]: event.target.value })
  }

  return (
    <section className="new-client">
      <h4>New Client Info</h4>
      <div>
        <form>
          <label htmlFor="firstName">First Name</label>
          <input onChange={handleInputs} type="text" id="firstName" name="firstName" />
          <label htmlFor="lastName">Last Name</label>
          <input onChange={handleInputs} type="text" name="lastName" id="lastName" />
          <label htmlFor="phone">Telephone</label>
          <input onChange={handleInputs} type="tel" id="phone" name="phone" />
          <label htmlFor="email">Email</label>
          <input onChange={handleInputs} type="email" id="email" name="email"/>
        </form>
        <article>
          <h5>{handleForm.firstName}</h5>
          <h5>{handleForm.lastName}</h5>
          <h5>{handleForm.phone}</h5>
          <h5>{handleForm.email}</h5>
        </article>
      </div>
    </section>
  );
};

export default NewClient;
