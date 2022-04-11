import React from "react";

import Background from "../components/common/Background";
import Container from "../components/common/Container";
import OuterHeader from "../components/OuterHeader";

import InnerHeader from "../components/InnerHeader";

const Lend = ({
  account,
  setAccount,
  isConnected,
  setIsConnected,
  chainId,
}) => {
  return (
    <Background>
      <OuterHeader />
      <Container>
        <InnerHeader
          account={account}
          setAccount={setAccount}
          isConnected={isConnected}
          setIsConnected={setIsConnected}
          chainId={chainId}
        />
        <div>loan lists</div>
      </Container>
    </Background>
  );
};

export default Lend;
