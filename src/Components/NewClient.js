import {React, useState} from "react";
import "./NewClient.css";

function NewClient () {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")




  const handleNameInput=(e)=>{
    setFirstName(e.target.value)
  }

  const handleLastNameInput=(e)=>{
    setLastName(e.target.value)
  }

  const handlePhoneInput=(e)=>{
    setPhone(e.target.value)
  }

  const handleEmailInput=(e)=>{
    setEmail(e.target.value)
  }


  
    return (
      <section className="new-client">
        <h4>New Client Info</h4>
        <div>
          <form>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" onChange={handleNameInput}/>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" onChange={handleLastNameInput}/>
            <label htmlFor="phone">Telephone</label>
            <input type="tel" id="phone" onChange={handlePhoneInput}/>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={handleEmailInput}/>
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
