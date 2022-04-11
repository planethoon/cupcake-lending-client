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

const WalletInfo = () => {
  const ethereum = window.ethereum;

  const [network, setNetwork] = useState("No Network");
  const [address, setAddress] = useState("Connect Wallet First");

  useEffect(() => {
    if (ethereum.chainId === "0x1") {
      setNetwork("Ethereum MainNet");
    } else if (ethereum.chainId === "0x3") {
      setNetwork("Ropsten TestNet");
    } else if (ethereum.chainId === "0x4") {
      setNetwork("Rinkeby TestNet");
    } else if (ethereum.chainId === "0x5") {
      setNetwork("Goerli TestNet");
    } else if (ethereum.chainId === "0x2a") {
      setNetwork("Kovan TestNet");
    } else {
      setNetwork("Unknown Network");
    }
  }, []);

  return (
    <Wrapper>
      <TextWrapper>
        <span>🛰</span>
        <span>{network}</span>
      </TextWrapper>
      <TextWrapper>
        <span>🪪</span>
        <span>{address.slice(0, 5) + "...." + address.slice(-6)}</span>
      </TextWrapper>
    </Wrapper>
  );
};

export default WalletInfo;
