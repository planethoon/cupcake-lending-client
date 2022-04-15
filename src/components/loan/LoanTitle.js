import React from "react";
import styled from "styled-components";

// styles below
import FlexCenter from "../common/FlexCenter";

// components below

const LoanTitle = () => {
  return (
    <InnerHeaderContainer>
      <div>
        <div>
          <Description>Loan List</Description>
        </div>
      </div>
    </InnerHeaderContainer>
  );
};

export default LoanTitle;

// Style below

const InnerHeaderContainer = styled(FlexCenter)`
  flex-direction: column;
  background-color: skyblue;
  height: 150px;
  position: relative;
`;

const Description = styled(FlexCenter)`
  font-size: 40px;
  margin: 8px 0;
`;
