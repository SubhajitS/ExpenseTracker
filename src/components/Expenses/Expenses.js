import Card from '../UI/Card';
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'

function Expenses(prop) {
  return (
    <Card className="expenses">
      <ExpenseItem
        title={prop.expenses[0].title}
        amount={prop.expenses[0].amount}
        date={prop.expenses[0].date}
      />
      <ExpenseItem
        title={prop.expenses[1].title}
        amount={prop.expenses[1].amount}
        date={prop.expenses[1].date}
      />
      <ExpenseItem
        title={prop.expenses[2].title}
        amount={prop.expenses[2].amount}
        date={prop.expenses[2].date}
      />
      <ExpenseItem
        title={prop.expenses[3].title}
        amount={prop.expenses[3].amount}
        date={prop.expenses[3].date}
      />
    </Card>
  );
}

export default Expenses;
