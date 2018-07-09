const defaultExpenseReducerState = [];
export default (state = defaultExpenseReducerState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      //return state.concat(action.expense);
      //Another way to add an object in array is using spread variabble
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      //We are using filter as it will not change the state
      return state.filter(expense => expense.id !== action.id);
    case "EDIT_EXPENSE":
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        }
      });
    default:
      return state;
      break;
  }
};
