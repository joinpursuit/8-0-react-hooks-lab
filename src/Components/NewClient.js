import {useState} from "react";
import "./NewClient.css";

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

function NewClient () {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleFirstName =(e)=>{
    setFirstName(e.target.value)
  }

  const handleOtherInput =(e)=>{
    let type = e.target.type;
    let value = e.target.value;
    
    if(type === "text"){
      setLastName(value)
      } else if (type === "tel"){
        setPhone(value)
      } else if (type === "email"){
        setEmail(value)
      }
    }
    

  return (
      <section className="new-client">
        <h4>New Client Info</h4>
        <div>
          <form>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" onInput={handleFirstName}/>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" onInput={handleOtherInput}/>
            <label htmlFor="phone">Telephone</label>
            <input type="tel" id="phone" onInput={handleOtherInput}/>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onInput={handleOtherInput}/>
          </form>
          <article>
            <h5>First Name: {firstName}</h5>
            <h5>Last Name: {lastName}</h5>
            <h5>Phone: {phone}</h5>
            <h5>Email: {email}</h5>
          </article>
        </div>
      </section>
  )
}

export default NewClient;
