import React, {useState} from "react";
import "./NewClient.css";


export default function NewClient() {

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")


const handleFirstName = (e) => {
  setFirstName(e.target.value)
}
const handleLastName = (e) => {
  setLastName(e.target.value)
}
const handlePhone = (e) => {
  setPhone(e.target.value)
}
const handleEmail = (e) => {
  setEmail(e.target.value)
}




  return (
    <div>
      <section className="new-client">
        <h4>New Client Info</h4>
        <div>
          <form> 
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" onChange={handleFirstName}/>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" onChange={handleLastName}/>
            <label htmlFor="phone">Telephone</label>
            <input type="tel" id="phone" onChange={handlePhone}/>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={handleEmail} />
          </form>
          <article>
            <h5>{firstName}</h5>
            <h5>{lastName}</h5>
            <h5>{phone}</h5>
            <h5>{email}</h5>
          </article>
        </div>
      </section>
    </div>
  )
}