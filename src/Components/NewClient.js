import React, {useState} from "react";
import "./NewClient.css";

const NewClient = () => {
  const [useClient, setClient] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: ''
  })

  const handleInputChange = (event) => {
    setClient({...useClient, [event.target.id]: event.target.value})
  }


  return (
    <section className="new-client">
      <h4>New Client Info</h4>
      <div>
        <form>
          <label htmlFor="firstName">First Name</label>
          <input onChange={handleInputChange} type="text" id="firstName" />
          <label htmlFor="lastName">Last Name</label>
          <input onChange={handleInputChange} type="text" id="lastName" />
          <label htmlFor="phone">Telephone</label>
          <input onChange={handleInputChange} type="tel" id="phone" />
          <label htmlFor="email">Email</label>
          <input onChange={handleInputChange} type="email" id="email" />
        </form>
        <article>
          <h5>{useClient.firstName}</h5>
          <h5>{useClient.lastName}</h5>
          <h5>{useClient.phone}</h5>
          <h5>{useClient.email}</h5>
        </article>
      </div>
    </section>
  );
}

export default NewClient;
