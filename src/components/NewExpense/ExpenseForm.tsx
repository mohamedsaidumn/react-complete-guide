import React, { FormEvent, SyntheticEvent, useState } from "react";
import "./ExpenseForm.css";
import { ExpenseItemType } from "../../config/types";

const ExpenseForm = (props: {
  onSaveExpenseData: (enteredExpenseData: ExpenseItemType) => void;
  onCancel: () => void;
}) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event: SyntheticEvent): void => {
    //Remember in typescipt event.target is an EventTarget interface
    //Therefore you must cast it to the element to get value
    let target: HTMLInputElement = event.target as HTMLInputElement;
    setEnteredTitle(target.value);
    console.log(target.value);
  };

  const amountChangeHandler = (event: SyntheticEvent): void => {
    let target: HTMLInputElement = event.target as HTMLInputElement;
    setEnteredAmount(target.value);
    console.log(target.value);
  };

  const dateChangeHandler = (event: SyntheticEvent): void => {
    let target: HTMLInputElement = event.target as HTMLInputElement;
    setEnteredDate(target.value);
    console.log(target.value);
  };

  const submitHandler = (event: FormEvent): void => {
    event.preventDefault();

    const expenseData: ExpenseItemType = {
      title: enteredTitle,
      amount: parseFloat(enteredAmount),
      date: new Date(enteredDate.replace(/-/g, "/")),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
