import { useState } from 'react'
import './NewClient.css'

function NewClient() {
  const [contactInfo, setContactInfo] = useState(
    {
      firstName: '',
      lastName: '',
      telephone: '',
      email: '',
    }
  )
  

  const handleFirstName = (event) => {
    setContactInfo({...contactInfo, firstName: event.target.value })
  }

  const handleLastName = (event) => {
    setContactInfo({ ...contactInfo, lastName: event.target.value })
  }

  const handleEmail = (event) => {
    setContactInfo({ ...contactInfo, email: event.target.value })
  }

  const handleTelephone = (event) => {
    setContactInfo({ ...contactInfo, telephone: event.target.value })
  }

  return (
    <section className='new-client'>
      <h4>New Client Info</h4>
      <div>
        <form>
          <label htmlFor='firstName'>First Name</label>
          <input
            type='text'
            id='firstName'
            value={contactInfo.firstName}
            onChange={handleFirstName}
          />
          <label htmlFor='lastName'>Last Name</label>
          <input
            type='text'
            id='lastName'
            value={contactInfo.lastName}
            onChange={handleLastName}
          />
          <label htmlFor='phone'>Telephone</label>
          <input
            type='tel'
            id='phone'
            value={contactInfo.telephone}
            onChange={handleTelephone}
          />
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            value={contactInfo.email}
            onChange={handleEmail}
          />
        </form>
        <article>
          <h5>First Name: {contactInfo.firstName}</h5>
          <h5>Last Name: {contactInfo.lastName}</h5>
          <h5>Telephone: {contactInfo.telephone}</h5>
          <h5>Email: {contactInfo.email}</h5>
        </article>
      </div>
    </section>
  )
}

export default NewClient
