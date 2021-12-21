import { useState } from "react";
import "./NewClient.css";

const NewClient = () => {
  const [state, setState] = useState({
    fName: "",
    lName: "",
    email: "",
    phoneNbr: "",
  });

  const handleChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const { fName, lName, phoneNbr, email } = state;
  return (
    <section className="new-client">
      <h4>New Client Info</h4>
      <div>
        <form>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="fName"
            value={fName}
            onChange={handleChange}
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lName"
            value={lName}
            onChange={handleChange}
          />
          <label htmlFor="phone">Telephone</label>
          <input
            type="tel"
            id="phone"
            name="phoneNbr"
            value={phoneNbr}
            onChange={handleChange}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </form>
        <article>
          <h5>{fName}</h5>
          <h5>{lName}</h5>
          <h5>{phoneNbr}</h5>
          <h5>{email}</h5>
        </article>
      </div>
    </section>
  );
};

export default NewClient;
