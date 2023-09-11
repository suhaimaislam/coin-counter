import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const IncomeItem = (props) => {
	const { dispatch } = useContext(AppContext);

	const handleDeleteIncome = () => {
		dispatch({
			type: 'DELETE_INCOME',
			payload: props.id,
		});
	};

	return (
		<li class='list-group-item d-flex justify-content-between align-items-center'>
			{props.name}
			<div>
				<span class='badge badge-primary badge-pill mr-3'>${props.cost}</span>
				<TiDelete size='1.5em' onClick={handleDeleteIncome} />
			</div>
		</li>
	);
};

export default IncomeItem;