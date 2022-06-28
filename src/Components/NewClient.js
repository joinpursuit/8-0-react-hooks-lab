import { useState, React } from "react";
import "./NewClient.css";

const NewClient = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  return (
    <section className="new-client">
      <h4>New Client Info</h4>
      <div>
        <form>
          <label htmlFor="firstName">First Name</label>
          <input
            value={firstName}
            type="text"
            id="firstName"
            onChange={({ target }) => setFirstName(target.value)}
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            value={lastName}
            type="text"
            id="lastName"
            onChange={({ target }) => setLastName(target.value)}
          />
          <label htmlFor="phone">Telephone</label>
          <input
            value={phone}
            type="tel"
            id="phone"
            onChange={({ target }) => setPhone(target.value)}
          />
          <label htmlFor="email">Email</label>
          <input
            value={email}
            type="email"
            id="email"
            onChange={({ target }) => setEmail(target.value)}
          />
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
};

export default NewClient;
