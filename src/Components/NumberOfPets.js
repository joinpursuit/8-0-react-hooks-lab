import "./NumberOfPets.css";
import { useState } from "react";

function NumberOfPets() {
	const [count, setCount] = useState(0);
	const Minus = () => {
		if (count < 1) {
			return;
		}
		setCount(count - 1);
	};
	return (
		<section className="num-of-pets">
			<h4>Number of Pets</h4>
			<h5>{count}</h5>
			<div>
				<button onClick={Minus} id="less">
					-
				</button>
				<button
					id="more"
					onClick={function Adding() {
						setCount(count + 1);
					}}
				>
					+
				</button>
			</div>
		</section>
	);
}

export default NumberOfPets;
