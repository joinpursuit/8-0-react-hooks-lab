import React, { useState } from "react";
import "./NewClient.css";

function NewClient() {
  const [ formInfo, setFormInfo ] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: ''
  });

  const handleFormInfo = (e) => { setFormInfo({...formInfo, [e.target.id]: e.target.value }) }

  return (
    <section className="new-client">
      <h4>New Client Info</h4>
      <div>
        <form>
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" onChange={(e) => handleFormInfo(e)} />
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" onChange={(e) => handleFormInfo(e)} />
          <label htmlFor="phone">Telephone</label>
          <input type="tel" id="phone" onChange={(e) => handleFormInfo(e)} />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={(e) => handleFormInfo(e)} />
        </form>
        <article>
          <h5>First Name: {formInfo.firstName}</h5>
          <h5>Last Name: {formInfo.lastName}</h5>
          <h5>Phone Number: {formInfo.phone}</h5>
          <h5>Email Address: {formInfo.email}</h5>
        </article>
      </div>
    </section>
  );
}

export default NewClient;
