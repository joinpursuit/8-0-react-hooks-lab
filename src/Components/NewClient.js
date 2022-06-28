import {React, useState} from "react";
import "./NewClient.css";

export default function NewClient(){
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhoneNum] = useState('');
  const [email, setEmail] = useState('');

  const onSearchChange = (e) => {
    const stateConst = e.target.id;
    const newValue = e.target.value;
    if (stateConst === 'firstName'){
      setFirstName(newValue);
    } else if (stateConst === 'lastName'){
      setLastName(newValue);
    } else if (stateConst === 'phone'){
      setPhoneNum(newValue);
    } else if (stateConst === 'email'){
      setEmail(newValue);
  }}

    return (
      <section className="new-client">
        <h4>New Client Info</h4>
        <div>
          <form >
            <label htmlFor="firstName"> First Name</label>
            <input type="text" id="firstName" onChange={onSearchChange} value={firstName}/>

            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" onChange={onSearchChange} value={lastName}/>

            <label htmlFor="phone">Telephone</label>
            <input type="tel" id="phone" onChange={onSearchChange} value={phone}/>

            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={onSearchChange} value={email}/>
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


