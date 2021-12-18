import React, {useState} from "react";
import "./NewClient.css";

const NewClient = () => {
  const [ formInfo, setFormInfo ] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: ''
  });

  const handleFormInfo = (event) => { setFormInfo({...formInfo, [event.target.id]: event.target.value })}

  return (
    <section className="new-client">
      <h4>New Client Info</h4>
      <div>
        <form>
          <label htmlFor="firstName">First Name</label>
          <input type="text" onChange={(event) => handleFormInfo(event)} id="firstName" />
          <label htmlFor="lastName">Last Name</label>
          <input type="text" onChange={(event) => handleFormInfo(event)} id="lastName" />
          <label htmlFor="phone">Telephone</label>
          <input type="tel" onChange={(event) => handleFormInfo(event)} id="phone" />
          <label htmlFor="email">Email</label>
          <input type="email" onChange={(event) => handleFormInfo(event)} id="email" />
        </form>
        <article>
          <h5>First Name: {formInfo.firstName}</h5>
          <h5>Last Name: {formInfo.lastName}</h5>
          <h5>Phone Number: {formInfo.phone}</h5>
          <h5>Email Address: {formInfo.email}</h5>
        </article>
      </div>
    </section>
  );
}

export default NewClient;
