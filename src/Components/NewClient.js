import React, { useState } from "react";
import "./NewClient.css";


function NewClient() {


  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");


  return (
    <section className="new-client">
      <h4>New Client Info</h4>
      <div>
        <form>
          <label htmlFor="firstName">First Name</label>
          <input type="text" value={firstName} required id="firstName" onChange={(e) => setFirstName(e.target.value)}
          />
          <label htmlFor="lastName">Last Name</label>
          <input value={lastName} required id="lastName" onChange={(e) => setLastName(e.target.value)}
          />
          <label htmlFor="phone">Telephone</label>
          <input type="tel" value={phone} required id="phone" onChange={(e) => setPhone(e.target.value)}
          />
          <label htmlFor="email">Email</label>
          <input type="email" value={email} required id="email" onChange={(e) => setEmail(e.target.value)} />

          {/* 
           
             */}
        </form>
        <article>
          <h5>First Name: {firstName}</h5>
          <h5>Last Name: {lastName}</h5>
          <h5>Phone: {phone}</h5>
          <h5>Email: {email}</h5>
        </article>

      </div>
    </section>





  )
}

export default NewClient
