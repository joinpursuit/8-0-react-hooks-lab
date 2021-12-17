import React, { useState} from "react";
import "./NewClient.css";

const NewClient = () =>{
const [formInfo, setFormInfo] = useState({
  firstName:"",
  lastName:"",
  phone:"",
  email:""
})

const handleChange = (event) =>{
const {value, id} = event.target
setFormInfo({...formInfo, [id]:value})
}
 
  
    return (
      <section className="new-client">
        <h4>New Client Info</h4>
        <div>
          <form>
            <label htmlFor="firstName">First Name</label>
            <input onChange={handleChange} type="text" id="firstName" />
            <label htmlFor="lastName">Last Name</label>
            <input onChange={handleChange} type="text" id="lastName" />
            <label htmlFor="phone">Telephone</label>
            <input onChange={handleChange} type="tel" id="phone" />
            <label htmlFor="email">Email</label>
            <input onChange={handleChange} type="email" id="email" />
          </form>
          <article>
            <h5>{formInfo.firstName}</h5>
            <h5>{formInfo.lastName}</h5>
            <h5>{formInfo.phone}</h5>
            <h5>{formInfo.email}</h5>
          </article>
        </div>
      </section>
    );
  }

export default NewClient;
