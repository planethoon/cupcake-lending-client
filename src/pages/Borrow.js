import React, { useState } from "react";

// styles below
import Background from "../components/common/Background";
import Container from "../components/common/Container";
import OuterHeader from "../components/OuterHeader";

// components below
import InnerHeader from "../components/InnerHeader";
import AssetList from "../components/AssetList";
import LoanList from "../components/LoanList";

const Borrow = () => {
  const [curTab, setCurTab] = useState(`asset`);

  return (
    <Background>
      <OuterHeader />
      <Container>
        <InnerHeader />
        {curTab === `asset` ? <AssetList /> : <LoanList />}
      </Container>
    </Background>
  );
};

export default Borrow;
