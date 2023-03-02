import React, { useState } from "react";
import { ExpenseItemWithIdType } from "../../config/types";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props: { expenses: ExpenseItemWithIdType[] }) => {
  const { expenses } = props;
  const [filteredYear, setFilteredYear] = useState("2020");

  const listExpenses = expenses.map((expense) => {
    return (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    );
  });

  const filteredExpensesByYear = listExpenses.filter((expense) => {
    return expense.props.date.getFullYear().toString() === filteredYear;
  });

  const filterChangeHandler = (selectedYear: string) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {filteredExpensesByYear}
    </Card>
  );
};

export default Expenses;
