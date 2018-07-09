import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => (
  <div>
    404!!
    {/*Do this only if you want to do a server side rendering <a href="/">Go Home</a> */}
    {/* Do this for client side rendering */}
    <Link to="/">Go Home</Link>
  </div>
);
export default NotFoundPage;
