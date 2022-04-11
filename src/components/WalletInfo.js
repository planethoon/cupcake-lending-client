import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FlexCenter from "./common/FlexCenter";

const Wrapper = styled(FlexCenter)`
  width: 140px;
  flex-direction: column;
  position: absolute;
  top: 8px;
  right: 8px;

  font-size: 15px; ;
`;

const TextWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 2px 0;
`;

const WalletInfo = ({ account, network }) => {
  return (
    <Wrapper>
      <TextWrapper>
        <span>🛰</span>
        <span>{network}</span>
      </TextWrapper>
      <TextWrapper>
        <span>🪪</span>
        <span>{account.slice(0, 5) + "...." + account.slice(-6)}</span>
      </TextWrapper>
    </Wrapper>
  );
};

export default WalletInfo;
