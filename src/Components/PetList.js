/** @format */

import React, { useState, useEffect } from 'react';
import Pet from './Pet';
import './PetList.css';

const BASE_URL = 'https://vet-lab-8-4.herokuapp.com/api';

function PetList() {
	const [petList, setPetList] = useState([]);

	useEffect(() => {
		async function fetchPetList() {
			const response = await fetch(`${BASE_URL}/pets`);
			const fetchedPetList = await response.json(response);
			setPetList(fetchedPetList);
		}
		fetchPetList();
	}, []);

	console.log(petList);

	const name = petList.map((pet) => pet.name);
	console.log(name);

	const handlePetChange = (e) => {
		const name = petList
			.filter((pet) => pet.name === e.target.value)
			.map((pet) => pet.name);

		const breed = petList.map((pet) => {
			return pet.breed;
		});

		const kind = petList.map((pet) => {
			return pet.kind;
		});

		const id = petList.map((pet) => {
			return pet.id;
		});
	};

	return (
		<section className='pet-list'>
			<h4>All Pets</h4>
			<article>
				<ul>{<Pet onChange={handlePetChange} />}</ul>
			</article>
		</section>
	);
}

export default PetList;
