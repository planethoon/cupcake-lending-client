import React from "react";
import styled from "styled-components";

import FlexCenter from "./common/FlexCenter";

const NoConnection = () => {
  return (
    <NoConnectionWrapper>
      <Alert>Wallet Connection Not Found.</Alert>
      <Alert>Please connect wallet first.</Alert>
    </NoConnectionWrapper>
  );
};

export default NoConnection;

//Style below

const NoConnectionWrapper = styled(FlexCenter)`
  flex-direction: column;
  height: 400px;
`;

const Alert = styled.div`
  &:first-child {
    font-size: 24px;
  }
  &:nth-child(2) {
    font-size: 18px;
  }
  margin: 5px 0;
`;
