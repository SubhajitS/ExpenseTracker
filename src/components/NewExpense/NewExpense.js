import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const saveExpenseHandler = (newExpense) => {
        const expenseData = {
            ...newExpense,
            id: Math.random().toString()
        };
        props.onAddingNewExpense(expenseData);
    };

    return <div className="new-expense">
        <ExpenseForm onSaveExpenseForm={saveExpenseHandler}></ExpenseForm>
    </div>;
};

export default NewExpense;