import React, { useState } from "react";
import "./NewClient.css";

export default function NewClient() {

  const [formInput, setFormInput] = useState({})

  const handleUserInput = (e) => {
    setFormInput({...formInput, [`${e.target.id}`]: e.target.value});
  }

  return (
    <section className="new-client">
        <h4>New Client Info</h4>
        <div>
          <form>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" value={formInput.firstName ? formInput.firstName : ""} onInput={e => handleUserInput(e)} />
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" value={formInput.lastName ? formInput.lastName : ""} onInput={e => handleUserInput(e)} />
            <label htmlFor="phone">Telephone</label>
            <input type="tel" id="phone" maxLength="15" placeholder="0" value={formInput.phone ? formInput.phone : ""} onInput={e => handleUserInput(e)} />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={formInput.email ? formInput.email : ""} onInput={e => handleUserInput(e)} />
          </form>
          <article>
            <h5>{formInput.firstName}</h5>
            <h5>{formInput.lastName}</h5>
            <h5>{formInput.phone}</h5>
            <h5>{formInput.email}</h5>
          </article>
        </div>
    </section>
  )
}
