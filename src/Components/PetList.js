// import Pet from "./Pet";
import "./PetList.css";
import { useEffect, useState } from "react";

const BASE_URL = "https://vet-api-8-1.herokuapp.com/api/pets";
function PetList() {
	const [stored, setStored] = useState([]);

	useEffect(() => {
		fetch(BASE_URL)
			.then((res) => res.json())
			.then((data) => setStored(data));
	}, []);
	const Mapping = stored.map((each, i) => {
		return (
			<div key={each + i} className="pet">
				<h3>{each.name}</h3>
				<h4>{each.breed}</h4>
				<h5>{each.kind}</h5>
			</div>
		);
	});

	return (
		<section className="pet-list">
			<h4>All Pets</h4>
			<article>{Mapping}</article>
		</section>
	);
}

export default PetList;
