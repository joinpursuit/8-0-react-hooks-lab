import React, { useState } from "react";
import "./NewClient.css";


const NewClient = () => {


  const [formInfo, setFormInfo] = useState({
    firstName: "",
    lastName: "",
    phone: 0,
    email: ""
  })
  
  const handleForm = (e) => {
    e.preventDefault()
    console.log(e.target.name, e.target.value)
    setFormInfo({...formInfo, [e.target.name]: e.target.value})
  }

  // const phoneFormat = (phoneNumber) => {
  //   let arr = phoneNumber.split("")
  
  //   let countryNum = arr[0]
  //   let first = arr.slice(1, 4).join("")
  //   let second = arr.slice(4, 7).join("")
  //   let third = arr.slice(7, 11).join("")

  // return (
  //   countryNum + "-" + first + "-" + second +"-" + third
  // )
  // }
  // console.log(phoneFormat(formInfo.phone))

    return (
      <section className="new-client">
        <h4>New Client Info</h4>
        <div>
          <form>
            <label htmlFor="firstName">First Name</label>
            <input onChange={(e)=>handleForm(e)} type="text" id="firstName"name="firstName" />
            <label htmlFor="lastName" >Last Name</label>
            <input onChange={(e)=>handleForm(e)}  type="text" id="lastName" name="lastName"/>
            <label htmlFor="phone">Telephone</label>
            <input onChange={(e)=>handleForm(e)}  type="tel" id="phone" name="phone"/>
            <label htmlFor="email">Email</label>
            <input onChange={(e)=>handleForm(e)} type="email" id="email"name="email" />
          </form>
          <article>
            <h5>{formInfo.firstName}</h5>
            <h5>{formInfo.lastName}</h5>
            <h5>{formInfo.phone !== 0 && formInfo.phone}</h5>
            <h5>{formInfo.email}</h5>
          </article>
        </div>
      </section>
    );

}

export default NewClient;
