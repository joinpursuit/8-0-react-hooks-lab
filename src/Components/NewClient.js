import React, { useState} from "react";
import "./NewClient.css";

const NewClient = () =>{
const [] = useState()
 
  
    return (
      <section className="new-client">
        <h4>New Client Info</h4>
        <div>
          <form>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" />
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" />
            <label htmlFor="phone">Telephone</label>
            <input type="tel" id="phone" />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </form>
          <article>
            <h5>firstName</h5>
            <h5>lastName</h5>
            <h5>phone</h5>
            <h5>email</h5>
          </article>
        </div>
      </section>
    );
  }

export default NewClient;
