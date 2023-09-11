import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const IncomeTotal = () => {
	const { incomes } = useContext(AppContext);

	const total = incomes.reduce((total, item) => {
		return (total += item.cost);
	}, 0);

	return (
		<div class='alert alert-primary p-4'>
			<span>Earnings This Month: ${total}</span>
		</div>
	);
};

export default IncomeTotal;