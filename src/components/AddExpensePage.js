import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { addExpense } from "../actions/expenses";

export class AddExpensePage extends React.Component {
  onSubmit = expense => {
    console.log(expense);
    //props.dispatch(addExpense(expense));
    this.props.addExpense(expense);
    //Direct browser routing
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <h1>Add Expense </h1>
        <ExpenseForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}
//Created the class based component above
/* const AddExpensePage = props => (
  <div>
    This is from my add expense component
    <ExpenseForm
      onSubmit={expense => {
        console.log(expense);
        //props.dispatch(addExpense(expense));
        props.onSubmit(expense);
        //Direct browser routing
        props.history.push("/");
      }}
    />
  </div>
); */

const mapDispatchToProps = dispatch => ({
  addExpense: expense => dispatch(addExpense(expense))
});

export default connect(
  undefined,
  mapDispatchToProps
)(AddExpensePage);
