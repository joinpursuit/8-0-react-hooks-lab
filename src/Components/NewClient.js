import React,{useState} from "react";
import "./NewClient.css";

const NewClient = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");


  const handleFirstName = (e) => {
    const {value} = e.target;
    setFirstName(value);
  }
  const handleLastName = (e) => {
    const {value} = e.target;
    setLastName(value);
  }
  const handlePhone = (e) => {
    const {value} = e.target;
    setPhone(value);
  }
  const handleEmail = (e) => {
    const {value} = e.target;
    setEmail(value);
  }

    return (
      <section className="new-client">
        <h4>New Client Info</h4>
        <div>
          <form>
            <label htmlFor="firstName">First Name</label>
            <input onChange={handleFirstName} type="text" id="firstName" />
            <label htmlFor="lastName">Last Name</label>
            <input onChange={handleLastName}type="text" id="lastName" />
            <label htmlFor="phone">Telephone</label>
            <input onChange={handlePhone}type="tel" id="phone" />
            <label htmlFor="email">Email</label>
            <input onChange={handleEmail}type="email" id="email" />
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
    }

export default NewClient;
