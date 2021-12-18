import "./FirstPet.css";
import { useState } from "react";

function FirstPet() {
	const [change, useChange] = useState(false);

	const ChangeHandle = () => {
		useChange(!change);
	};
	return (
		<section className="first-pet">
			<h4>Is this your first pet?</h4>
			<br />
			<form>
				<input onClick={ChangeHandle} value="false" type="checkbox" />
			</form>
			{change ? <h5>Yes</h5> : <h5>No</h5>}
		</section>
	);
}

export default FirstPet;
