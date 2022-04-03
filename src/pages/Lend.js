import React from "react";

import Background from "../components/common/Background";
import Container from "../components/common/Container";
import OuterHeader from "../components/OuterHeader";

import InnerHeader from "../components/InnerHeader";

const Lend = () => {
  return (
    <Background>
      <OuterHeader />
      <Container>
        <InnerHeader />
        <div>loan lists</div>
      </Container>
    </Background>
  );
};

export default Lend;
