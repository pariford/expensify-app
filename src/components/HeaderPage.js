import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    {/* Use Link for Normal styling. For advanced styling use NavLink */}
    {/*     <Link to="/">HomePage</Link>
    <Link to="/create">AddExpense</Link>
    <Link to="/edit">EditExpense</Link>
    <Link to="/help">Help</Link> */}
    <h1>Expensify</h1>
    <NavLink activeClassName="selected" exact={true} to="/">
      Home Page
    </NavLink>
    <NavLink activeClassName="selected" exact={true} to="/create">
      Add Component
    </NavLink>
    <NavLink activeClassName="selected" exact={true} to="/edit">
      Edit Component
    </NavLink>
    <NavLink activeClassName="selected" exact={true} to="/help">
      Help Page
    </NavLink>
  </header>
);
export default Header;
