import { React, useState } from "react";
import "./NewClient.css";

export default function NewClient() {
  const [form, setForm] = useState({});

  return (
    <section className="new-client">
      <h4>New Client Info</h4>
      <div>
        <form>
          <label htmlFor="firstName" value="firstName">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            onChange={(e) => setForm({ ...form, firstName: e.target.value })}
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            onChange={(e) => setForm({ ...form, lastName: e.target.value })}
          />
          <label htmlFor="phone">Telephone</label>
          <input
            type="tel"
            id="phone"
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </form>
        <article>
          <h5>First Name: {form.firstName}</h5>
          <h5>Last Name: {form.lastName}</h5>
          <h5>Phone: {form.phone}</h5>
          <h5>Email: {form.email}</h5>
        </article>
      </div>
    </section>
  );
}
