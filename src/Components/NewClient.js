import React from "react";
import "./NewClient.css";
import { useState } from "react"

const NewClient = () => {
  // [STATE, SETTER FUNCTION] = USE STATE(STARTING VALUES)
  const [clientInfo, setClientInfo] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  })
  /**
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
   */

  const handleUserInput = (event) => {
    setClientInfo({ ...clientInfo, [event.target.id] : event.target.value})
  }
  // WE'RE ABLE TO USE THE SAME METHOD MULTIPLE TIMES BECAUSE TARGET IS IDENTIFIED BY PROPERTIES

  
  return (
    <section className="new-client">
        <h4>New Client Info</h4>
        <div>
          <form>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" value={clientInfo.firstName} onChange={handleUserInput} />
        {/* onChange={(e)=>setFirstName(e.target.value)} */}
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" value={clientInfo.lastName} onChange={handleUserInput} />
            <label htmlFor="phone">Telephone</label>
            <input type="tel" id="phone" value={clientInfo.phone} onChange={handleUserInput} />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={clientInfo.email} onChange={handleUserInput} />
          </form>

          <article>
            <h5>{clientInfo.firstName}</h5>
            {/* <h5>{setFirstName}</h5> */}
            <h5>{clientInfo.lastName}</h5>
            <h5>{clientInfo.phone}</h5>
            <h5>{clientInfo.email}</h5>
          </article>
        </div>
      </section>
    );
  }


export default NewClient;
