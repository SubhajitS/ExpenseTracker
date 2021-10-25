import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const saveExpenseHandler = (newExpense) => {
        props.onAddingNewExpense(newExpense)
    };

    return <div className="new-expense">
        <ExpenseForm onSaveExpenseForm={saveExpenseHandler}></ExpenseForm>
    </div>;
};

export default NewExpense;