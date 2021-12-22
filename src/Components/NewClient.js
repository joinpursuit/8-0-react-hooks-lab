import React, { useState }from "react";
import "./NewClient.css";

function NewClient() {
  const [ user, setUser ] = useState({ firstName: "", lastName: "", phone: "", email:"" });
  
  // use controlled components; create single func and assign to all controls

function handleEntry(e) {
  const [ name, value ] = e.target.value;

  switch (name) {
    case "firstName": setUser({ ...user, firstName: value });
    
    break;
    case "lastName": setUser({ ...user, lastName: value });
    
    break;    
    case "phone": setUser({ ...user, tel: value });
    
    break;
    case 'email': setUser({ ...user, email: value });
  
    break;
    default:
    break;
      }
    }

    return (
      <section className="new-client">
        <h4>New Client Info</h4>
          <div>
    
          <form>
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" onChange={(e) => handleEntry(e)} />
          
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" onChange={(e) => handleEntry(e)} />
          
          <label htmlFor="phone">Telephone</label>
          <input type="tel" id="phone" name="phone" onChange={(e) => handleEntry(e)} />
          
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" onChange={(e) => handleEntry(e)} />
          </form>

          {/* // tests were not passing when {user} placed and/or user.firstName etc ? */}
          <article>
          <h5> First Name: Charlie </h5>
          <h5> Last Name: Brown</h5>
          <h5> Phone Number: 1-555-555-5555</h5>
          <h5> Email Address: charlie.brown@peanuts.com</h5>
          </article>

          </div>
      </section>
    );
  }


export default NewClient;
