import React from "react";
import "./NewClient.css";
import { useState } from 'react';

const NewClient=()=> {
  const [ clientInfo, setClientInfo ] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
  })

  const handleInput=(e)=>{
    setClientInfo({...clientInfo, [e.target.id] : e.target.value})
  }

    return (
      <section className="new-client">
        <h4>New Client Info</h4>
        <div>
          <form>
            <label htmlFor="firstName">First Name</label>
            <input 
              type="text" 
              id="firstName" 
              onChange={(e)=>handleInput(e)}
            />
            <label htmlFor="lastName">Last Name</label>
            <input 
              type="text" 
              id="lastName" 
              onChange={(e)=>handleInput(e)}
            />
            <label htmlFor="phone">Telephone</label>
            <input 
              type="tel" 
              id="phone" 
              onChange={(e)=>handleInput(e)}
            />
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              onChange={(e)=>handleInput(e)}
            />
          </form>
          <article>
            <h5>{ clientInfo.firstName }</h5>
            <h5>{ clientInfo.lastName }</h5>
            <h5>{ clientInfo.phone }</h5>
            <h5>{ clientInfo.email }</h5>
          </article>
        </div>
      </section>
    );
}

export default NewClient;
