//Higher Order Component (HOC) - A component (HOC) that renders another component
//Reuse Code
//Render hijacking
//Prop manipulation
//Abstract state
import React from "react";
import ReactDOM from "react-dom";

const Info = props => (
  <div>
    <h1>Info</h1>
    <p>The info is : {props.info}</p>
  </div>
);

const withAdminWarning = WrappedComponent => {
  return props => (
    <div>
      {!props.isAdmin && <p>This is private info.Please dont share</p>}
      <WrappedComponent {...props} />
    </div>
  );
};
const requireAuthentication = WrappedComponent => {
  return props => (
    <div>{props.isAuthenticated && <WrappedComponent {...props} />}</div>
  );
};
const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);
ReactDOM.render(
  <div>
    <AdminInfo isAdmin={false} info="Here are the details" />
    <AuthInfo isAuthenticated={true} info="You are authenticated" />
  </div>,
  document.getElementById("app")
);
