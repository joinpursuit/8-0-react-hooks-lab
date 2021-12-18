import { useFormState } from '../hooks/useFormState';
import './NewClient.css';

const NewClient = () => {
  const [firstName, updateFirstName, resetFirstName] = useFormState('');
  const [lastName, updateLastName, resetLastName] = useFormState('');
  const [phone, updatePhone, resetPhone] = useFormState('');
  const [email, updateEmail, resetEmail] = useFormState('');

  const reset = () => {
    resetFirstName();
    resetLastName();
    resetPhone();
    resetEmail();
  };

  return (
    <section className="new-client">
      <h4>New Client Info</h4>
      <div>
        <form onSubmit={reset}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            onChange={(e) => updateFirstName(e.target.value)}
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            onChange={(e) => updateLastName(e.target.value)}
          />
          <label htmlFor="phone">Telephone</label>
          <input
            type="tel"
            id="phone"
            onChange={(e) => updatePhone(e.target.value)}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            onChange={(e) => updateEmail(e.target.value)}
          />
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
};

export default NewClient;
