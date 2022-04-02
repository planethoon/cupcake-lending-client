import React from "react";
import styled from "styled-components";

import StyledBtn from "../components/common/StyledBtn";
import StyledLink from "../components/common/StyledLink";

const LandingContainer = styled.div`
  background-color: skyblue;
`;

const LandingBtn = styled(StyledBtn)`
  background-color: grey;
`;

const Landing = () => {
  return (
    <LandingContainer>
      <h1>Cupcake Lending</h1>
      <div>
        <StyledLink to="/borrow">
          <LandingBtn>Borrow</LandingBtn>
        </StyledLink>
        <StyledLink to="/lend">
          <LandingBtn>Lend</LandingBtn>
        </StyledLink>
      </div>
    </LandingContainer>
  );
};

export default Landing;
