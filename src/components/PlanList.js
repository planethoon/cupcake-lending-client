import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

import FlexCenter from "./common/FlexCenter";
import StyledBtn from "./common/StyledBtn";

import NoConnection from "./NoConnection";

const ListHeader = () => {
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

  const AddPlanBtn = styled(FlexCenter)`
    border: 1px solid green;
    padding: 5px 10px;
    border-radius: 10px;
    background-color: green;
    color: white;
    cursor: pointer;
  `;

  return (
    <HeaderWrapper>
      <Title>
        <div>Your Plan</div>
      </Title>
      <AddPlanWrapper>
        <AddPlanBtn>+ Add Plan</AddPlanBtn>
      </AddPlanWrapper>
    </HeaderWrapper>
  );
};

const StopBtn = () => {
  const Btn = styled(StyledBtn)`
    background-color: pink;
  `;

  const [isStopped, setIsStopped] = useState(false);

  return <>{isStopped ? <Btn>Resume</Btn> : <Btn>Stop</Btn>}</>;
};

const WithdrawBtn = () => {
  const Btn = styled(StyledBtn)`
    background-color: pink;
  `;

  return (
    <>
      <Btn>Withdraw</Btn>
    </>
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
  width: 230px;
`;

const Plan = () => {
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
          <StopBtn />
          <WithdrawBtn />
        </BtnContainer>
      </ItemWrapper>
    </Wrapper>
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
