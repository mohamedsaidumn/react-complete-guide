import React, { useState } from "react";
import { ExpenseItemWithIdType } from "../../config/types";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props: { expenses: ExpenseItemWithIdType[] }) => {
  const { expenses } = props;
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear: string) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpensesByYear = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart filteredExpenses={filteredExpensesByYear} />
      <ExpensesList filteredExpenses={filteredExpensesByYear} />
    </Card>
  );
};

export default Expenses;
