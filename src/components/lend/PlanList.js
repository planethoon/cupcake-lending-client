import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

import FlexCenter from "../common/FlexCenter";
import StyledLink from "../common/StyledLink";

import NoConnection from "../NoConnection";
import StopBtn from "./StopBtn";
import WithdrawBtn from "./WithdrawBtn";
import AddPlanBtn from "./AddPlanBtn";

const ListHeader = () => {
  return (
    <HeaderWrapper>
      <Title>
        <div>Your Plan</div>
      </Title>
      <AddPlanWrapper>
        <AddPlanBtn />
      </AddPlanWrapper>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid red;
  height: 50px;
`;

const Title = styled(FlexCenter)`
  font-size: 24px;
  margin-left: 24px;
  font-weight: 600;
`;

const AddPlanWrapper = styled(FlexCenter)`
  margin-right: 24px;
`;

const Plan = ({ loanInfo }) => {
  return (
    <Wrapper>
      <ItemWrapper>
        <Value>5 wETH</Value>
        <Value>50%</Value>
        <Value>30 Days</Value>
        <Value>
          <span>5.230211 wETH</span>
          <span>(3 wETH)</span>
        </Value>
        <Value>In Progress</Value>
        <BtnContainer>
          <StopBtn loanInfo={loanInfo} />
          <WithdrawBtn loanInfo={loanInfo} />
        </BtnContainer>
        <LoanLink to="/loan" />
      </ItemWrapper>
    </Wrapper>
  );
};

const ItemWrapper = styled.div`
  border: 1px solid blue;
  border-radius: 10px;
  width: 95%;
  height: 60px;
  display: flex;
  justify-content: center;
  margin: 5px 0;
  position: relative;
`;

const Wrapper = styled(FlexCenter)`
  flex-direction: column;
`;

const Value = styled(FlexCenter)`
  border: 1px solid red;
  width: 150px;
  font-weight: 500;
  &:nth-child(1) {
    width: 100px;
  }
  &:nth-child(2) {
    width: 80px;
  }
  &:nth-child(3) {
    width: 80px;
  }
  &:nth-child(4) {
    flex-direction: column;
    width: 160px;
  }
  &:nth-child(5) {
    width: 80px;
  }
`;

const BtnContainer = styled(FlexCenter)`
  /* width: 230px; */
  z-index: 99;
`;

const LoanLink = styled(StyledLink)`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const PlanContainer = () => {
  return (
    <>
      <Container>
        <Indexes>
          <Index>Plan Volume</Index>
          <Index>APR</Index>
          <Index>Duration</Index>
          <Index>Earn(Available)</Index>
          <Index>Status</Index>
          <Index>Action</Index>
        </Indexes>
        <Plan />
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Indexes = styled(FlexCenter)`
  border: 1px solid black;
  height: 32px;
  font-weight: 500;
`;

const Index = styled(FlexCenter)`
  /* border: 1px solid blue; */
  width: 150px;
  font-size: 18px;
  &:nth-child(1) {
    margin-left: 10px;
    width: 125px;
  }
  &:nth-child(2) {
    width: 80px;
  }
  &:nth-child(3) {
    width: 80px;
  }
  &:nth-child(4) {
  }
  &:nth-child(5) {
    width: 80px;
  }
  &:nth-child(6) {
    width: 250px;
    margin-right: 10px;
  }
`;

const PlanList = ({ isConnected, account }) => {
  const [planlist, setPlanlist] = useState({});

  // const getPlanData = () => {
  //   const endpoint = `https://localhost:3000/planlist?address=${account}`;
  //   axios.get(endpoint).then((res) => {
  //     setPlanlist(res);
  //   });
  // };

  // useEffect(() => {
  //   getPlanData();
  // });

  return (
    <div>
      {isConnected ? (
        <>
          <ListHeader />
          <PlanContainer />
        </>
      ) : (
        <NoConnection />
      )}
    </div>
  );
};

export default PlanList;

//Style below
