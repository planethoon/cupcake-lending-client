import React, { useState } from "react";
import styled from "styled-components";

// styles below
import Background from "../components/common/Background";
import Container from "../components/common/Container";
import OuterHeader from "../components/OuterHeader";
import StyledBtn from "../components/common/StyledBtn";
import StyledLink from "../components/common/StyledLink";

// components below
import ResultTab from "../components/ResultTab";

const LendResult = () => {
  const [curTab, setCurTab] = useState(`Loan`);

  return (
    <Background>
      <OuterHeader />
      <Container>
        <ResultTab />
        <Title>Successed!</Title>
        <BtnContainer>
          <StyledLink to="/AddPlan">
            <ContinueBtn>add another Plan</ContinueBtn>
          </StyledLink>
          <StyledLink to="/Lend">
            <ContinueBtn>View Loan</ContinueBtn>
          </StyledLink>
        </BtnContainer>
      </Container>
    </Background>
  );
};

export default LendResult;

//Style below

const ContinueBtn = styled(StyledBtn)`
  background-color: grey;
  width: 150px;
`;

const BtnContainer = styled.div`
  border: 1px solid pink;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const Title = styled.div`
  display: flex;
  font-size: 24px;
  margin: 20px 0;
  align-items: center;
  justify-content: center;
`;
