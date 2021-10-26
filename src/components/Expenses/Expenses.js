import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import React, {useState} from "react";

function Expenses(prop) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log('from expenses:', selectedYear);
  }
  return (
    <div>
      <ExpenseFilter onFilterChange={filterChangeHandler} selected={filteredYear}/>
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
    </div>
  );
}

export default Expenses;
