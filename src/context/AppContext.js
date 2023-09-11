import React, { createContext, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

// 5. The reduceer - this is used to update the state, based on the action
export const AppReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_EXPENSE':
			return {
				...state,
				expenses: [...state.expenses, action.payload],
			};
		case 'DELETE_EXPENSE':
			return {
				...state,
				expenses: state.expenses.filter(
					(expense) => expense.id !== action.payload
				),
			};
        case 'ADD_INCOME':
            return {
                ...state,
                incomes: [...state.incomes, action.payload],
            };
        case 'DELETE_INCOME':
            return {
                ...state,
                incomes: state.incomes.filter(
                    (income) => income.id !== action.payload
                ),
            };
        case 'SET_BUDGET':
            return {
                ...state,
                budget: action.payload,
            };
        case 'SET_BALANCE':
            return {
                ...state,
                balance: action.payload,
            };

		default:
			return state;
	}
};

// 1. Sets the initial state when the app loads
const initialState = {
	budget: 2000,
    balance: 15000,
	expenses: [
		{ id: uuidv4(), name: 'Zara', cost: 100 },
		{ id: uuidv4(), name: 'Groceries', cost: 300 },
		{ id: uuidv4(), name: 'Monthly Train Fare', cost: 132 },
		{ id: uuidv4(), name: 'Phone Bill', cost: 40 },
		{ id: uuidv4(), name: 'Wifi & Cable', cost: 75 },
	],
    incomes: [
		{ id: uuidv4(), name: 'July Week 1', cost: 500 },
		{ id: uuidv4(), name: 'July Week 2', cost: 500 },
		{ id: uuidv4(), name: 'July Week 3', cost: 500 },
		{ id: uuidv4(), name: 'Mercari July', cost: 250 },
		{ id: uuidv4(), name: 'Airbnb July', cost: 345 },
	],
};

// 2. Creates the context this is the thing our components import and use to get the state
export const AppContext = createContext();

// 3. Provider component - wraps the components we want to give access to the state
// Accepts the children, which are the nested(wrapped) components
export const AppProvider = (props) => {
	// 4. Sets up the app state. takes a reducer, and an initial state
	const [state, dispatch] = useReducer(AppReducer, initialState);

	// 5. Returns our context. Pass in the values we want to expose
	return (
		<AppContext.Provider
			value={{
				expenses: state.expenses,
                incomes: state.incomes,
				budget: state.budget,
                balance: state.balance,
				dispatch,
			}}
		>
			{props.children}
		</AppContext.Provider>
	);
};