import React from "react";
import styled from "styled-components";

import StyledLink from "../common/StyledLink";
import FlexCenter from "../common/FlexCenter";

const AddPlanBtn = () => {
  return (
    <StyledLink to="/addplan">
      <Btn>+ Add Plan</Btn>
    </StyledLink>
  );
};

export default AddPlanBtn;

const Btn = styled(FlexCenter)`
  border: 1px solid green;
  padding: 5px 10px;
  border-radius: 10px;
  background-color: green;
  color: white;
  cursor: pointer;
`;
