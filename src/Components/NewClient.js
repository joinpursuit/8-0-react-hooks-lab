import "./NewClient.css";
import { useState } from "react";

function NewClient() {
	const [first, useFirst] = useState("");
	const [last, useLast] = useState("");
	const [phone, usePhone] = useState("");
	const [email, useEmail] = useState("");
	return (
		<section className="new-client">
			<h4>New Client Info</h4>
			<div>
				<form>
					<label htmlFor="firstName">First Name</label>
					<input
						onChange={function First(e) {
							useFirst(e.target.value);
						}}
						type="text"
						id="firstName"
					/>
					<label htmlFor="lastName">Last Name</label>
					<input
						onChange={function Last(e) {
							useLast(e.target.value);
						}}
						type="text"
						id="lastName"
					/>
					<label htmlFor="phone">Telephone</label>
					<input
						onChange={function Phone(e) {
							usePhone(e.target.value);
						}}
						type="tel"
						id="phone"
					/>
					<label htmlFor="email">Email</label>
					<input
						onChange={function Email(e) {
							useEmail(e.target.value);
						}}
						type="email"
						id="email"
					/>
				</form>
				<article>
					<h5>{first}</h5>
					<h5>{last}</h5>
					<h5>{phone}</h5>
					<h5>{email}</h5>
				</article>
			</div>
		</section>
	);
}

export default NewClient;
