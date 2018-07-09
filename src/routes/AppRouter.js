import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/HeaderPage";
import "../styles/styles.scss";
import "normalize.css/normalize.css";

console.log("App is running");

const AppRouter = () => (
  <BrowserRouter>
    {/*When using switch div is not required {<div>} */}
    {/* But when using Header class component kind of structure, use div */}
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
    {/* {</div>} */}
  </BrowserRouter>
);
export default AppRouter;
