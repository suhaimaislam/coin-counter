import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import TotalBalance from './components/TotalBalance';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';
import IncomeTotal from './components/IncomeTotal';
import IncomeList from './components/IncomeList';
import AddIncomeForm from './components/AddIncomeForm';
import RemainingBudget from './components/Remaining';

import Header from "./Header";

const App = () => {
	return (
		<AppProvider>
      <div>
        <Header/>
      </div>
			<div className='container'>
        <div>
          <TotalBalance />
        </div>
        <div>
						<IncomeTotal />
					</div>
				<div className='row mt-3'>
					<div className='col-sm'>
						<Budget />
					</div>
          <div className='col-sm'>
						<ExpenseTotal />
					</div>
					<div className='col-sm'>
						<RemainingBudget />
					</div>
				</div>
        <div className='row mt-2'>
          <h3 className='col-sm'>Expenses</h3>
          <h3 className='col-sm'>Income</h3>
        </div>
				<div className='row mt-2'>
					<div className='col-sm'>
						<ExpenseList />
					</div>
          <div className='col-sm'>
            <IncomeList />
          </div>
				</div>
        <div className='row mt-2'>
          <h3 className='col-sm'>Add Expense</h3>
          <h3 className='col-sm'>Add Income</h3>
        </div>
				<div className='row mt-3'>
					<div className='col-sm'>
						<AddExpenseForm />
					</div>
          <div className='col-sm'>
            <AddIncomeForm />
          </div>
				</div>
			</div>
		</AppProvider>
	);
};

export default App;