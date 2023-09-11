import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = () => {
	const { expenses } = useContext(AppContext);

	const total = expenses.reduce((total, item) => {
		return (total += item.cost);
	}, 0);

	return (
		<div class='alert alert-warning p-4'>
			<span>Spent This Month: ${total}</span>
		</div>
	);
};

export default ExpenseTotal;