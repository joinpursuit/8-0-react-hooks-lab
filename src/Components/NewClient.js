import { useState } from "react";
import "./NewClient.css";

const NewClient = () => {
  const [clientInfo, setClientInfo] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const updateInfo = (e) => {
    e.preventDefault();
    setClientInfo({ ...clientInfo, [e.target.name]: e.target.value });
  };
  console.log(clientInfo);

  return (
    <section className="new-client">
      <h4>New Client Info</h4>
      <div>
        <form>
          <label htmlFor="firstName">First Name</label>
          <input
            onChange={updateInfo}
            type="text"
            id="firstName"
            name="firstName"
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            onChange={updateInfo}
            type="text"
            id="lastName"
            name="lastName"
          />
          <label htmlFor="phone">Telephone</label>
          <input onChange={updateInfo} type="tel" id="phone" name="phone" />
          <label htmlFor="email">Email</label>
          <input onChange={updateInfo} type="email" id="email" name="email" />
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
