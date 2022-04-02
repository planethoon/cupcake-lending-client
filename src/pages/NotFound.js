import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      Not Found!
      <Link to="/">
        <div>Back to Landing Page</div>
      </Link>
    </div>
  );
};

export default NotFound;
