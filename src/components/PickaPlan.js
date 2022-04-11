import React from "react";
import styled from "styled-components";

// styles below
import FlexCenter from "./common/FlexCenter";

// components below

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

const PickaPlan = () => {
  return (
    <InnerHeaderContainer>
      <div>
        <div>
          <Description>Pick a Plan</Description>
        </div>
      </div>
    </InnerHeaderContainer>
  );
};

export default PickaPlan;
