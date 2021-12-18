import Pet from "./Pet";
import "./PetList.css";
import { useEffect, useState } from "react";

const BASE_URL = "http://localhost:5000/api";

function PetList() {
	const [stored, setStored] = useState();

	useEffect(() => {
		fetch({ BASE_URL })
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				console.log(data);
				setStored(data);
			});
	});

	return (
		<section className="pet-list">
			<h4>All Pets</h4>
			<article>
				<Pet data={stored} />
			</article>
		</section>
	);
}

export default PetList;
