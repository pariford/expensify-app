import { createStore } from "redux";

//Action Generators - function that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy
});

const setCount = ({ count }) => ({
  type: "SET",
  count
});

const resetCount = ({ count }) => ({
  type: "RESET",
  count
});

//Reducer
//Reducers are pure function
//State or action should not be changed
const countReducer = ((state = { count: 0 }, action) => {
  //Better use switch case than if else loop
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.incrementBy };
      break;
    case "DECREMENT":
      return { count: state.count - action.decrementBy };
      break;
    case "SET":
      return { count: action.count };
      break;
    case "RESET":
      return { count: action.count };
      break;
    default:
      return state;
      break;
  }
  /*   if (action.type === "INCREMENT") {
    return { count: state.count + 1 };
  } else {
    return state;
  } */
});
const store = createStore(countReducer);
//It is called everytime the state of the object is changed
store.subscribe(() => {
  console.log(store.getState());
});

//Actions - an object that is sent to the state
//Below we are trying to check the state's count value based on increment,decrement and reset
//increment the count
store.dispatch(incrementCount({ incrementBy: 5 }));
//increment the count
store.dispatch(incrementCount());
//Set the count
store.dispatch(setCount({ count: 100 }));
//reset the count
store.dispatch(resetCount({ count: 0 }));
//decrement the count
store.dispatch(decrementCount({ decrementBy: 10 }));
//decrement the count
store.dispatch(decrementCount({ decrementBy: 10 }));
