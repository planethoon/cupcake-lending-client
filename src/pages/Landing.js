import React from "react";
import styled from "styled-components";

import Background from "../components/common/Background";
import StyledBtn from "../components/common/StyledBtn";
import StyledLink from "../components/common/StyledLink";

const LandingContainer = styled(Background)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LandingBtn = styled(StyledBtn)`
  background-color: grey;
`;

const BtnContainer = styled.div`
  border: 1px solid pink;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const Title = styled.div`
  font-size: 24px;
  margin: 20px 0;
`;

const Landing = () => {
  return (
    <LandingContainer>
      <Title>Cupcake Lending</Title>
      <BtnContainer>
        <StyledLink to="/borrow">
          <LandingBtn>Borrow</LandingBtn>
        </StyledLink>
        <StyledLink to="/lend">
          <LandingBtn>Lend</LandingBtn>
        </StyledLink>
      </BtnContainer>
    </LandingContainer>
  );
};

export default Landing;
