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
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    );
  });

  const filterChangeHandler = (selectedYear: string) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {listExpenses}
    </Card>
  );
};

export default Expenses;
