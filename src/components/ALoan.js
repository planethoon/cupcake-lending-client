import React from "react";
import styled from "styled-components";
import FlexCenter from "./common/FlexCenter";

import LoanListItem from "./LoanListItem";
import Container from "../components/common/Container";
import StyledBtn from "../components/common/StyledBtn";
import StyledLink from "../components/common/StyledLink";

const OuterWrapper = styled.div`
  border: 1px solid gray;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const NftInfo = styled.div`
  display: flex;
  flex-direction: column;
  jusfity-content: center;
  & > img {
    width: 200px;
    height: 200px;
`;

const LoanInfo = styled.div`
  display: flex;
  flex-direction: column;
  background-color: pink;
  margin-left: 50px;
`;

const Title = styled(FlexCenter)`
  font-size: 24px;
  margin-left: 12px;
  margin-bottom: 12px;
  font-weight: 600;
`;

const BtnContainer = styled.div`
  border: 1px solid pink;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const CloseBtn = styled(StyledBtn)`
  background-color: grey;
  width: 150px;
`;

const Box = styled.div`
  display: flex;
  border: 1px solid pink;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const Aloan = () => {
  return (
    <OuterWrapper>
      <Box>
        <NftInfo>
          <Title>NFT Info</Title>
          <img src="https://via.placeholder.com/350" />
          <span>Collection Name</span>
          <span>NFT Number</span>
        </NftInfo>
        <LoanInfo>
          <Title>Loan Info</Title>
          <span>Loan Volume - 2.0 wETH</span>
          <span>Duration - 30 Days</span>
          <spna>APR - 30%</spna>
          <spna>Repayment - 2.05 wETH</spna>
          <span>status - in progress</span>
        </LoanInfo>
      </Box>
      <BtnContainer>
        <StyledLink to="/Loan">
          <CloseBtn>Close</CloseBtn>
        </StyledLink>
      </BtnContainer>
    </OuterWrapper>
  );
};

export default Aloan;
