import React from "react";
import { useState } from "react/cjs/react.development";
import "./NewClient.css";

function NewClient(){
  const [first, setFirst] = useState('')
  const [last, setLast] = useState('')
  const [phone, setPhone]=useState('')
  const [email, setEmail]=useState('')
    return (
      <section className="new-client">
        <h4>New Client Info</h4>
        <div>
          <form>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" value={first} onChange={e=> setFirst(e.target.value)}/>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" value={last} onChange={e=> setLast(e.target.value)} />
            <label htmlFor="phone">Telephone</label>
            <input type="tel" id="phone" value={phone} onChange={e=> setPhone(e.target.value)}/>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} onChange={e=> setEmail(e.target.value)} />
          </form>
          <article>
            <h5>{first}</h5>
            <h5>{last}</h5>
            <h5>{phone}</h5>
            <h5>{email}</h5>
          </article>
        </div>
      </section>
    );
}

export default NewClient;
