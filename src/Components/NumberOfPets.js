import "./NumberOfPets.css";
import { useState } from "react";

function NumberOfPets() {
	const [count, useCount] = useState(0);
	const Adding = () => {
		useCount(count + 1);
	};
	const Minus = () => {
		if (count >= 0) {
			useCount(count - 1);
		} else return;
	};
	return (
		<section className="num-of-pets">
			<h4>Number of Pets</h4>
			<h5>{count}</h5>
			<div>
				<button onClick={Minus} id="less">
					-
				</button>
				<button onClick={Adding} id="more">
					+
				</button>
			</div>
		</section>
	);
}

export default NumberOfPets;
