
import React from "react";
import "./NewClient.css";
import { useState } from 'react';


const  NewClient = () => {
  
const [ firstName, changeFirstName ] = useState("");
const [ lastName, changeLastName ] = useState("");
const [ phone, changePhone ] = useState("");
const [ email, changeEmail  ] = useState("");


    return (
      <section className="new-client">
        <h4>New Client Info</h4>
        <div>
          <form>
            <label htmlFor="firstName">First Name</label>
            <input type="text" 
            id="firstName"  
            onChange={(event) => changeFirstName(event.target.value)}/>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" onChange={(event) => changeLastName(event.target.value)}/>
            <label htmlFor="phone">Telephone</label>
            <input type="tel" id="phone" onChange={(event) => changePhone(event.target.value)}/>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={(event) => changeEmail(event.target.value)}/>
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
  }

export default NewClient;
