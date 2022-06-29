import React, {useState} from "react";
import "./NewClient.css";

const NewClient = () =>{
  const [first, setFirst] = useState('')
  const [last, setLast] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  
  const profileFirst = (e) =>{
   const {value}= e.target
   const {id} = e.target
   if(id === "firstName"){
      setFirst(value)
    }
  }
  const profileLast = (e) =>{
    const {value}= e.target
    const {id} = e.target
      if(id === "lastName"){
       setLast(value)
      }
  }
  const profilePhone = (e)=>{
    const {value}= e.target
    const {id} = e.target
    if(id === "phone"){
      setPhone(value)
    }
  }
  const profileEmail = (e)=>{
    const {value}= e.target
    const {id} = e.target
    if(id === "email"){
      setEmail(value)
    }
  }

  
 
    return (
      <section className="new-client">
        <h4>New Client Info</h4>
        <div>
          <form>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" onChange = {profileFirst} />
            <label htmlFor="lastName" >Last Name</label>
            <input type="text" id="lastName" onChange = {profileLast}/>
            <label htmlFor="phone">Telephone </label>
            <input type="tel" id="phone" onChange = {profilePhone}/>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={profileEmail} />
          </form>
          <article>
            <h5>First Name: {first}</h5>
            <h5>Last Name: {last}</h5>
            <h5>Phone: {phone}</h5>
            <h5>Email: {email}</h5>
          </article>
        </div>
      </section>
    );

}

export default NewClient;
