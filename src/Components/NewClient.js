import './NewClient.css';
import React, { useState  } from 'react';

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

function NewClient() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <section className='new-client'>
      <h4>New Client Info</h4>
      <div>
        <form>
          <label htmlFor='firstName'>First Name</label>
          <input
            type='text'
            id='firstName'
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label htmlFor='lastName'>Last Name</label>
          <input
            type='text'
            id='lastName'
            onChange={(e) => setLastName(e.target.value)}
          />
          <label htmlFor='phone'>Telephone</label>
          <input
            type='tel'
            id='phone'
            onChange={(e) => setPhone(e.target.value)}
          />
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            onChange={(e) => setEmail(e.target.value)}
          />
        </form>
        <article>
          <h5>FirstName: {firstName}</h5>
          <h5>LastName:{lastName}</h5>
          <h5>Phone:{phone}</h5>
          <h5>Email:{email}</h5>
        </article>
      </div>
    </section>
  );
}

export default NewClient;
