import React, { useContext, useState, useEffect } from 'react';
import IncomeItem from './IncomeItem';
import { AppContext } from '../context/AppContext';

const IncomeList = () => {
	const { incomes } = useContext(AppContext);

	const [filteredIncomes, setfilteredIncomes] = useState(incomes || []);

	useEffect(() => {
		setfilteredIncomes(incomes);
	}, [incomes]);

	const handleChange = (event) => {
		const searchResults = incomes.filter((filteredIncome) =>
			filteredIncome.name.toLowerCase().includes(event.target.value),
		);
		setfilteredIncomes(searchResults);
	};

	return (
		<>
			<input
				type='text'
				class='form-control mb-2 mr-sm-2'
				placeholder='Type to search...'
				onChange={handleChange}
			/>
			<ul class='list-group mt-3 mb-3'>
				{filteredIncomes.map((income) => (
					<IncomeItem
						id={income.id}
						name={income.name}
						cost={income.cost}
					/>
				))}
			</ul>
		</>
	);
};

export default IncomeList;