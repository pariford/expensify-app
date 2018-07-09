import moment from "moment";
import {
  setStartDate,
  setEndDate,
  sortByDate,
  sortByAmount,
  setTextFilter
} from "../../actions/filters";

test("should generate set start date action object", () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0)
  });
});

test("test should generate set end date action object", () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: "SET_END_DATE",
    endDate: moment(0)
  });
});

test("test should be able to sort the action object by amount", () => {
  const action = sortByAmount("1000");
  expect(action).toEqual({
    type: "SORT_BY_AMOUNT",
    sortBy: "1000"
  });
});

test("test should be able to sort the action object by date", () => {
  const action = sortByDate(moment(0));
  expect(action).toEqual({
    type: "SORT_BY_DATE",
    sortBy: moment(0)
  });
});

test("test should be able to provide filtered results", () => {
  const text = "Bill";
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text
  });
});

test("test should be able to provide filtered results without any values", () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: ""
  });
});
