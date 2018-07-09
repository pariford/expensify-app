import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";

export const ExpenseList = props => (
  <div>
    <h1> Expense List</h1>
    {props.expenses.length === 0 ? (
      <p>No Expense</p>
    ) : (
      props.expenses.map(expense => {
        //Object.assign is similar to spread operator for objects.Only the former one is more verbose
        return <ExpenseListItem key={expense.id} {...expense} />;
      })
    )}
  </div>
);
//Output of connect() is a function which takes the argument which in turn when called gives back the HOC
//Its a type of presentational component pattern
const mapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};
export default connect(mapStateToProps)(ExpenseList);
