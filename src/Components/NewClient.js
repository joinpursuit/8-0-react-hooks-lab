import { useState } from "react";
import "./NewClient.css";

function NewClient() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  }
  return (
    <section className="new-client">
      <h4>New Client Info</h4>
      <div>
        <form>
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" onChange={handleChange} />
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" onChange={handleChange} />
          <label htmlFor="phone">Telephone</label>
          <input type="tel" id="phone" onChange={handleChange} />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={handleChange} />
        </form>
        <article>
          <h5>{form.firstName}</h5>
          <h5>{form.lastName}</h5>
          <h5>{form.phone}</h5>
          <h5>{form.email} </h5>
        </article>
      </div>
    </section>
  );
}

export default NewClient;
