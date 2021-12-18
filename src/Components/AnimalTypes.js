import "./AnimalTypes.css";
import { useState } from "react";

const animalTypes = ["dog", "cat", "ferret", "bird", "fish", "snake", "lizard"];

function AnimalTypes() {
	const [selected, useSelected] = useState("");

	const [types, useTypes] = useState(animalTypes);

	const Selection = (e) => {
		useSelected(e.target.value);
	};

	const Submission = (e) => {
		e.preventDefault();
		useTypes(...animalTypes, selected);
	};
	//   const Removing = () => {
	// if(e.target.value === types){

	// }
	//   }

	const Animals = types.map((each) => {
		return (
			<li>
				{each} <button>-</button>
			</li>
		);
	});

	return (
		<section className={"animal-types"}>
			<h4>Animal Types</h4>
			<form onClick={Submission}>
				<label htmlFor="type">
					<input onInput={Selection} type="text" id="animal-type" />
				</label>
				<input type="submit" />
			</form>
			<ol>{Animals}</ol>
		</section>
	);
}

export default AnimalTypes;
