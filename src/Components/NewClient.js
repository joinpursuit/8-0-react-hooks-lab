import "./NewClient.css";
import React from 'react'
import {useState} from 'react'




const NewClient = () => {
  const [client, setClient] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: ''
  })
  
  const handleChange = (event) => {
    const { id, value } = event.target
    setClient({...client, [id]:value})
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
          <h5>{client.firstName}</h5>
          <h5>{client.lastName}</h5>
          <h5>{client.phone}</h5>
          <h5>{client.email}</h5>
        </article>
      </div>
    </section>
  );
  
}

export default NewClient
