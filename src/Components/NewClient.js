import './NewClient.css';
import { useState } from 'react';

const NewClient = () => {
  const [form, setForm] = useState({});

  const handleForm = (event) => {
    const { value, id } = event.target;
    setForm({ ...form, [id]: value || undefined });
  };

  const { firstName, lastName, phone, email } = form;
  return (
    <section className="new-client">
      <h4>New Client Info</h4>
      <div>
        <form>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={handleForm}
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={handleForm}
          />
          <label htmlFor="phone">Telephone</label>
          <input type="tel" id="phone" value={phone} onChange={handleForm} />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={email} onChange={handleForm} />
        </form>
        <article>
          <h5>{firstName || 'First Name'}</h5>
          <h5>{lastName || 'Last Name'}</h5>
          <h5>{phone || 'Phone Number'}</h5>
          <h5>{email || 'Email'}</h5>
        </article>
      </div>
    </section>
  );
};

export default NewClient;
