import { useState } from "react";
import "./NewClient.css";

const NewClient = () => {
  const [clientInfo, setClientInfo] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });
  const handleChange = (event) => {
    setClientInfo({ ...clientInfo, [event.target.id]: event.target.value });
  };
  return (
    <section className="new-client">
      <h4>New Client Info</h4>
      <div>
        <form>
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" value={clientInfo.firstName} onChange={handleChange} />
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" value={clientInfo.lastName} onChange={handleChange} />
          <label htmlFor="phone">Telephone</label>
          <input type="tel" id="phone" value={clientInfo.phone} onChange={handleChange} />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={clientInfo.email} onChange={handleChange} />
        </form>
        <article>
          <h5>{clientInfo.firstName}</h5>
          <h5>{clientInfo.lastName}</h5>
          <h5>{clientInfo.phone}</h5>
          <h5>{clientInfo.email}</h5>
        </article>
      </div>
    </section>
  );
};

export default NewClient;