import React, {useState} from "react";
import "./NewClient.css";

const NewClient = () => {
  const [clientInfo, setClientInfo] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: ""
  })

  const handleForm = (e) => {
    e.preventDefault()
    const { id , value } = e.target
    setClientInfo({...clientInfo, [id]: value})
  }

    return (
      <section className="new-client">
        <h4>New Client Info</h4>
        <div>
          <form>
            <label htmlFor="firstName">First Name</label>
            <input onChange={(e)=>handleForm(e)} type="text" id="firstName" />
            <label htmlFor="lastName">Last Name</label>
            <input onChange={(e)=>handleForm(e)} type="text" id="lastName" />
            <label htmlFor="phone">Telephone</label>
            <input onChange={(e)=>handleForm(e)} type="tel" id="phone" />
            <label htmlFor="email">Email</label>
            <input onChange={(e)=>handleForm(e)} type="email" id="email" />
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

}

export default NewClient;
