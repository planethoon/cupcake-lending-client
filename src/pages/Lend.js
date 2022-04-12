import React from "react";

import Background from "../components/common/Background";
import Container from "../components/common/Container";
import OuterHeader from "../components/OuterHeader";

import InnerHeader from "../components/InnerHeader";
import PlanList from "../components/PlanList";

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
        <PlanList isConnected={isConnected} account={account} />
      </Container>
    </Background>
  );
};

export default Lend;
