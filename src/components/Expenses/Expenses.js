import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";

function Expenses(prop) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = prop.expenses.filter(
    (exp) => new Date(exp.date).getFullYear().toString() === filteredYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          onFilterChange={filterChangeHandler}
          selected={filteredYear}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
