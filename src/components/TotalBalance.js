import React, { useState, useContext } from 'react';
import ViewBalance from './ViewBalance';
import { AppContext } from '../context/AppContext';

const Balance = () => {
	const { balance, expenses, incomes } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
		return (total += item.cost);
	}, 0);

    const totalIncomes = incomes.reduce((total, item) => {
		return (total += item.cost);
	}, 0);

    const alertType = totalExpenses > balance + totalIncomes ? 'alert-danger' : 'alert-success';

	return (
		<div class={`alert alert-info p-4 ${alertType}`}>
			<span>Total Balance: ${balance + totalIncomes - totalExpenses}</span>
		</div>
	);
};

export default Balance;