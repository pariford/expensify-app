import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routes/AppRouter";
import configureStore from "./store/configureStore";
import expenseSelector from "./selectors/expenses";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import "./styles/styles.scss";
import "normalize.css/normalize.css";
import "react-dates/lib/css/_datepicker.css";

const store = configureStore();
//addExpense ->Water Bill
//addExpense ->Gas Bill
//setTextFilter ->bill(2 items) ->water (1 item)
//getVisibleExpenses -> print visible ones to screen

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = expenseSelector(state.expenses, state.filters);
  console.log(visibleExpenses);
});
store.dispatch(addExpense({ description: "Water Bill", amount: 4500 }));
store.dispatch(addExpense({ description: "Gas Bill", createdAt: 1000 }));
store.dispatch(addExpense({ description: "Rent", amount: 10950 }));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
