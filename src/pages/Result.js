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

const ContinueBtn = styled(StyledBtn)`
  background-color: grey;
  width: 100px;
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

const Result = ({ setCurTab }) => {
  return (
    <Background>
      <OuterHeader />
      <Container>
        <ResultTab />
        <Title>Successed!</Title>
        <BtnContainer>
          <StyledLink
            to="/borrow"
            onClick={() => {
              setCurTab(`loan`);
            }}
          >
            <ContinueBtn>Continue</ContinueBtn>
          </StyledLink>
        </BtnContainer>
      </Container>
    </Background>
  );
};

export default Result;
