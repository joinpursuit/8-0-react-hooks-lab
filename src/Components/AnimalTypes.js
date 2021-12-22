import "./AnimalTypes.css";
import { useState } from "react";
const animalTypes = ["dog", "cat", "ferret", "bird", "fish", "snake", "lizard"];

function AnimalTypes() {
	// the  input value
	const [selected, setSelected] = useState("");
	// the list of aimal that is alerady selected .
	const [types, setTypes] = useState(animalTypes);

	const inputHolder = (e) => {
		setSelected(e.target.value);
	};
	// adding the state
	const submission = (e) => {
		e.preventDefault();
		setSelected("");
		if (selected !== "") {
			setTypes(types.concat(selected));
		}
	};
	// delete the name selected
	const deleteAnimal = (event) => {
		let filter = types.filter((e) => e !== event.target.value);
		setTypes(filter);
	};

	const Animals = types.map((each, index) => {
		return (
			<li key={index}>
				{each}
				<button value={each} onClick={deleteAnimal}>
					-
				</button>
			</li>
		);
	});

	return (
		<section className={"animal-types"}>
			<h4>Animal Types</h4>
			<form>
				<label htmlFor="type">
					<input
						type="text"
						value={selected}
						onInput={inputHolder}
						id="animal-type"
					/>
				</label>
				<button onClick={submission} type="submit">
					Submit
				</button>
			</form>
			<ol>{Animals}</ol>
		</section>
	);
}

export default AnimalTypes;
