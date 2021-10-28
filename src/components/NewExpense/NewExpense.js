import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [isNewExpenseFormVisible, setIsNewExpenseFormVisible] = useState(false);

  const saveExpenseHandler = (newExpense) => {
    setIsNewExpenseFormVisible(false);
    if (!newExpense) {
      return;
    }
    const expenseData = {
      ...newExpense,
      id: Math.random().toString(),
    };
    props.onAddingNewExpense(expenseData);
  };

  const expenseEditHandler = () => {
    setIsNewExpenseFormVisible(true);
  };

  const cancelExpenseEditHandler = () => {
    setIsNewExpenseFormVisible(false);
  } 

  return (
    <div className="new-expense">
      {!isNewExpenseFormVisible && <button type="button" onClick={expenseEditHandler}>
        Add New Expense
      </button>}
      {isNewExpenseFormVisible && <ExpenseForm onSaveExpenseForm={saveExpenseHandler} onCancelExpenseForm={cancelExpenseEditHandler}></ExpenseForm>}
    </div>
  );
};

export default NewExpense;
