import React, { SyntheticEvent } from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props: {
  selected: string;
  onChangeFilter: (selectedYear: string) => void;
}) => {
  const dropdownChangeHandler = (event: SyntheticEvent) => {
    let target: HTMLSelectElement = event.target as HTMLSelectElement;
    props.onChangeFilter(target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
