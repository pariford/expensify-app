import moment from "moment";
import expensesReducers from "../../reducers/expenses";
import expenses from "../../fixtures/expenses";
test("should set the default state", () => {
  const state = expensesReducers(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should remove expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id
  };
  const state = expensesReducers(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expense if id not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "23"
  };
  const state = expensesReducers(expenses, action);
  expect(state).toEqual(expenses);
});

test("should add an expense", () => {
  const expense = {
    id: "4",
    description: "Paint",
    note: "",
    amount: 195000,
    createdAt: moment()
  };
  const action = {
    type: "ADD_EXPENSE",
    expense
  };
  const state = expensesReducers(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test("should edit expense if id is found", () => {
  const amount = 12235;
  const action = {
    type: "EDIT_EXPENSE",
    id: "2",
    updates: {
      amount
    }
  };
  const state = expensesReducers(expenses, action);
  expect(state[1].amount).toBe(amount);
});

test('should not edit an expense if id not found', () => {
    const amount = 122000;
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            amount
        }
    };
    const state = expensesReducers(expenses, action);
    expect(state).toEqual(expenses);
});
