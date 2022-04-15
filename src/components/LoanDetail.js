import React from "react";
import styled from "styled-components";

// styles below
import FlexCenter from "./common/FlexCenter";

// components below

const LoanDetail = () => {
  return (
    <InnerHeaderContainer>
      <div>
        <div>
          <Description>Loan Detail</Description>
        </div>
      </div>
    </InnerHeaderContainer>
  );
};

export default LoanDetail;

//Style below

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
