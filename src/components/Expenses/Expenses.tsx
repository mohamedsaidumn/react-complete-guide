import React from "react";
import { expenseItemType } from "../../config/types";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";

const Expenses = (props: { expenses: expenseItemType[] }) => {
  const { expenses } = props;
  const listExpenses = expenses.map((expense) => {
    return (
      <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    );
  });

  return <Card className="expenses">{listExpenses}</Card>;
};

export default Expenses;
