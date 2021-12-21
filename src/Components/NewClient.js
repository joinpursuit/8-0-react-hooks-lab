import React, {useState} from "react";
import "./NewClient.css";

const NewClient = () => {
  const [formInfo, setFormInfo] = useState ({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });
  const info = (ev) => {
    setFormInfo({...formInfo, [ev.target.id]: ev.target.value})
  }
    return (
      <section className="new-client">
        <h4>New Client Info</h4>
        <div>
          <form>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" onChange={(ev) => info(ev)}/>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" onChange={(ev) => info(ev)}/>
            <label htmlFor="phone">Telephone</label>
            <input type="tel" id="phone" onChange={(ev) => info(ev)}/>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={(ev) => info(ev)}/>
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
