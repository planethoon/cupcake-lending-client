import React from "react";
import styled from "styled-components";
import FlexCenter from "./common/FlexCenter";

const dummyData = {
  address: "0x6C2b602b66697480f68b1e6006fccF839666d90d",
  network: "Ropsten Network",
};

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

const WalletInfo = () => {
  return (
    <Wrapper>
      <TextWrapper>
        <span>🛰</span>
        <span>{dummyData.network}</span>
      </TextWrapper>
      <TextWrapper>
        <span>🪪</span>
        <span>
          {dummyData.address.slice(0, 5) + "...." + dummyData.address.slice(-6)}
        </span>
      </TextWrapper>
    </Wrapper>
  );
};

export default WalletInfo;
