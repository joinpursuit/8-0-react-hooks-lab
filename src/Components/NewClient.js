import React, { useState } from "react";
import "./NewClient.css";

export default function NewClient() {
  // const [ firstName, setFirstName ] = useState("");
  // const [ lastName, setLastName ] = useState("");
  // const [ phone, setPhone ] = useState("");
  // const [ email, setEmail ] = useState("");
  
  // const handleUserInput = () => {
  //   const formInputs = {
  //     "firstName": firstName,
  //     "lastName": lastName,
  //     "phone": phone,
  //     "email": email,
  //   }
  //   console.log(formInputs)
  // }

  const [formInput, setFormInput] = useState({})

  const handleUserInput = (e) => {
    setFormInput({...formInput, [`${e.target.id}`]: e.target.value});
  }

  return (
    <section className="new-client">
        <h4>New Client Info</h4>
        <div>
          <form>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" value={formInput.firstName ? formInput.firstName : ""} onInput={e => handleUserInput(e)} />
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" value={formInput.lastName ? formInput.lastName : ""} onInput={e => handleUserInput(e)} />
            <label htmlFor="phone">Telephone</label>
            <input type="tel" id="phone" maxLength="15" placeholder="0" value={formInput.phone ? formInput.phone : ""} onInput={e => handleUserInput(e)} />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={formInput.email ? formInput.email : ""} onInput={e => handleUserInput(e)} />
          </form>
          <article>
            <h5>{formInput.firstName}</h5>
            <h5>{formInput.lastName}</h5>
            <h5>{formInput.phone}</h5>
            <h5>{formInput.email}</h5>
          </article>
        </div>
    </section>
  )
}


// class NewClient extends React.Component {
//   constructor(){
//     super();
//     this.state = {
//       firstName: "",
//       lastName: "",
//       phone: "",
//       email: ""
//     }
//   }

//   handleUserInput = (e) => {
//     this.setState({
//       [e.target.id]: e.target.value
//     })
//   }

//   handleSubmit = (e) => {
//     e.preventDefault();
//   }

//   render() {
//     const { firstName, lastName, email, phone } = this.state
//     return (
//       <section className="new-client">
//         <h4>New Client Info</h4>
//         <div>
//           <form onInput={this.handleSubmit}>
//             <label htmlFor="firstName">First Name</label>
//             <input type="text" id="firstName" value={firstName} onInput={this.handleUserInput} />
//             <label htmlFor="lastName">Last Name</label>
//             <input type="text" id="lastName" value={lastName} onInput={this.handleUserInput} />
//             <label htmlFor="phone">Telephone</label>
//             <input type="tel" id="phone" maxlength="10" placeholder="0" value={phone} onInput={this.handleUserInput} />
//             <label htmlFor="email">Email</label>
//             <input type="email" id="email" value={email} onInput={this.handleUserInput} />
//           </form>
//           <article>
//             <h5>{firstName}</h5>
//             <h5>{lastName}</h5>
//             <h5>{phone}</h5>
//             <h5>{email}</h5>
//           </article>
//         </div>
//       </section>
//     );
//   }
// }

// export default NewClient;
