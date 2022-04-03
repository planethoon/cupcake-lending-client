import React from "react";
import { Link } from "react-router-dom";

import StyledBtn from "../components/common/StyledBtn";
import StyledLink from "../components/common/StyledLink";

const NotFound = () => {
  return (
    <div>
      Not Found!
      <StyledLink to="/">
        <StyledBtn>Back to Landing Page</StyledBtn>
      </StyledLink>
    </div>
  );
};

export default NotFound;
