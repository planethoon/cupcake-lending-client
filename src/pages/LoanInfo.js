import React, { useState } from "react";
import styled from "styled-components";

// styles below
import Background from "../components/common/Background";
import Container from "../components/common/Container";
import OuterHeader from "../components/OuterHeader";
import StyledBtn from "../components/common/StyledBtn";
import StyledLink from "../components/common/StyledLink";

// components below
import LoanDetail from "../components/LoanDetail";
import AssetList from "../components/AssetList";
import ALoan from "../components/ALoan";

const LoanInfo = () => {
  return (
    <Background>
      <OuterHeader />
      <Container>
        <LoanDetail />
        <ALoan />
      </Container>
    </Background>
  );
};

export default LoanInfo;
