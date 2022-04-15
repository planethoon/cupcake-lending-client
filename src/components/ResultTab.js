import React from "react";
import styled from "styled-components";

// styles below
import FlexCenter from "./common/FlexCenter";

// components below

const ResultTab = () => {
  return (
    <InnerHeaderContainer>
      <div>
        <div>
          <Description>Result</Description>
        </div>
      </div>
    </InnerHeaderContainer>
  );
};

export default ResultTab;

//Style below

const InnerHeaderContainer = styled(FlexCenter)`
  flex-direction: column;
  background-color: skyblue;
  height: 100px;
  position: relative;
`;

const Description = styled(FlexCenter)`
  font-size: 40px;
  margin: 8px 0;
`;
