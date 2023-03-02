import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import { ExpenseItemType, ExpenseItemWithIdType } from "../../config/types";

const NewExpenses = (props: {
  onAddExpense: (data: ExpenseItemWithIdType) => void;
}) => {
  const saveExpenseDataHandler = (enteredExpenseData: ExpenseItemType) => {
    const expenseData: ExpenseItemWithIdType = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    //console.log(expenseData);
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpenses;
