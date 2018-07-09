import React from "react";
import { connect } from "react-redux";
import { DateRangePicker } from "react-dates";
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate
} from "../actions/filters";

export class ExpenseListFilters extends React.Component {
  state = {
    calendarFocus: null
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };
  onFocusChange = calendarFocus => {
    this.setState(() => ({ calendarFocus }));
  };
  onSortChange = e => {
    e.target.value === "date"
      ? this.props.sortByDate("date")
      : this.props.sortByAmount("amount");
    console.log(e.target.value);
  };
  onTextChange = e => {
    this.props.setTextFilter(e.target.value);
    console.log(e.target.value);
  };
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={this.onTextChange}
        />
        {/*We are creating here a controlled input*/}
        <select value={this.props.filters.sortBy} onChange={this.onSortChange}>
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocus}
          onFocusChange={this.onFocusChange}
          startDateId="start"
          endDateId="end"
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates={true}
        />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  filters: state.filters
});
const maptDispatchtoProps = dispatch => ({
  setTextFilter: text => {
    dispatch(setTextFilter(text));
  },
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount),
  setStartDate: startDate => dispatch(setStartDate(startDate)),
  setEndDate: endDate => dispatch(setEndDate(endDate))
});

export default connect(
  mapStateToProps,
  maptDispatchtoProps
)(ExpenseListFilters);
