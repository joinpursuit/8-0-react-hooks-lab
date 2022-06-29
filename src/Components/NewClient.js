import React, { useState } from "react";
import "./NewClient.css";

const NewClient = () => {
  // const [firstName, setFirstName] = useState(''); 
  //   const [lastName, setLastName] = useState(''); 
  //   const [phone, setPhone] = useState(''); 
  //   const [email, setEmail] = useState(''); 

    const [input1, setInput1] = useState('First Name'); 
    const [input2, setInput2] = useState('Last Name'); 
    const [input3, setInput3] = useState('Phone #'); 
    const [input4, setInput4] = useState('Email'); 



    return (
      <section className="new-client">
        <h4>New Client Info</h4>
        <div>
          <form >
            <label htmlFor="firstName">First Name</label>
            <input onChange={(e) => setInput1(e.target.value)} type="text" id="firstName" value={input1}/>
            <label htmlFor="lastName">Last Name</label>
            <input onChange={(e) => setInput2(e.target.value)}  type="text" id="lastName" value={input2}/>
            <label htmlFor="phone">Telephone</label>
            <input onChange={(e) => setInput3(e.target.value)} type="tel" id="phone" value={input3}/>
            <label htmlFor="email">Email</label>
            <input onChange={(e) => setInput4(e.target.value)} type="email" id="email" value={input4}/>
            {/* <button type="submit">Submit</button>  */}
          </form>
          <article>
            <h5>{input1}</h5>
            <h5>{input2}</h5>
            <h5>{input3}</h5>
            <h5>{input4}</h5>
          </article>
        </div>
      </section>
    );
}

export default NewClient;
