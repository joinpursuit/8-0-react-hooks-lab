import React from "react";
import "./NewClient.css";
import {useState} from 'react'

const NewClient=()=>{
  const[firstName, setfirstName] = useState("")
  const[lastName, setlastName] = useState("")
  const[phone, setphone] = useState("")
  const[email, setemail] = useState("")

  const handlefirstNameForm=(e)=>{
    setfirstName(e.target.value)
  }
  const handlelastNameForm=(e)=>{
    setlastName(e.target.value)
  }
  const handlePhoneForm=(e)=>{
    setphone(e.target.value)
  }
  const handleEmailForm=(e)=>{
    setemail(e.target.value)
  }


    return (
      <section className="new-client">
        <h4>New Client Info</h4>
        <div>
          <form>
            <label htmlFor="firstName">First Name</label>
            <input onChange={handlefirstNameForm} value={firstName}type="text" id="firstName" />
            <label htmlFor="lastName">Last Name</label>
            <input onChange={handlelastNameForm} value={lastName}type="text" id="lastName" />
            <label htmlFor="phone">Telephone</label>
            <input onChange={handlePhoneForm} value={phone}type="tel" id="phone" />
            <label htmlFor="email">Email</label>
            <input onChange={handleEmailForm} value={email}type="email" id="email" />
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

// class NewClient extends React.Component {
//   render() {
//     return (
//       <section className="new-client">
//         <h4>New Client Info</h4>
//         <div>
//           <form>
//             <label htmlFor="firstName">First Name</label>
//             <input type="text" id="firstName" />
//             <label htmlFor="lastName">Last Name</label>
//             <input type="text" id="lastName" />
//             <label htmlFor="phone">Telephone</label>
//             <input type="tel" id="phone" />
//             <label htmlFor="email">Email</label>
//             <input type="email" id="email" />
//           </form>
//           <article>
//             <h5>firstName</h5>
//             <h5>lastName</h5>
//             <h5>phone</h5>
//             <h5>email</h5>
//           </article>
//         </div>
//       </section>
//     );
//   }
// }

export default NewClient;
