/** @format */

import React, { useState } from 'react';
import './FirstPet.css';

function FirstPet() {
	const [firstPet, setFirstPet] = useState('');

	const handleChange = (e) => {
		if (e.target.value === true) {
			setFirstPet('Yes');
			console.log(e.target.value);
		} else {
			setFirstPet('No');
		}
	};

	return (
		<section className='first-pet'>
			<h4>Is this your first pet?</h4>
			<br />
			<form>
				<input type='checkbox' onChange={handleChange} />
			</form>
			<h5>{firstPet}</h5>
		</section>
	);
}

export default FirstPet;
