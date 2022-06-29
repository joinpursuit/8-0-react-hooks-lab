/** @format */

import './Pet.css';

export const Pet = ({ name, kind, breed, id }) => {
	return (
		<div className='pet'>
			<li key={id}>
				<h3>{name}</h3>
				<h4>{breed}</h4>
				<h5>{kind}</h5>
			</li>
		</div>
	);
};

export default Pet;
