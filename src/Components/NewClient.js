import React, {useState} from "react";
import "./NewClient.css";

const NewClient = () => {
 const[handleForm, setForm] = useState({
   firstName: "",
   lastName: "",
   email: "",
   phone: ""
 })

 const handleInput = (event) => {
   setForm({...handleForm, [event.target.id]: event.target.value})
   //basically set form extends to the usual. Event finds id target usual formula.
 }
    return (
      <section className="new-client">
        <h4>New Client Info</h4>
        <div>
          <form>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" onChange={handleInput}/>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName"  onChange={handleInput}/>
            <label htmlFor="phone">Telephone</label>
            <input type="tel" id="phone" onChange={handleInput}/>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={handleInput}/>
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
  }


export default NewClient;
