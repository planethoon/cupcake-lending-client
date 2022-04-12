import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

import FlexCenter from "./common/FlexCenter";
import AddPlan from "../pages/AddPlan";

import StyledBtn from "../components/common/StyledBtn";
import StyledLink from "../components/common/StyledLink";

import PlanItem from "./PlanItem";

const dummyData = [
  {
    originalPrice: 2,
    apr: "40%",
    duration: 7776000,
    earn: 2.4,
    status: "inprogress",
  },
  {
    originalPrice: 2,
    apr: "40%",
    duration: 7776000,
    earn: 2.4,
    status: "inprogress",
  },
  {
    originalPrice: 2,
    apr: "40%",
    duration: 7776000,
    earn: 2.4,
    status: "inprogress",
  },
];

const OuterWrapper = styled(FlexCenter)`
  height: 400px;
  flex-direction: column;
  justify-content: flex-start;
  overflow-y: auto;
`;

const Indexes = styled.div`
  display: flex;
  width: 100%;
  margin: 10px 0;
`;

const Index = styled(FlexCenter)`
  /* border: 1px solid black; */
  // 정렬 차후에 픽셀단위로 변경 예정

  font-size: 18px;
  font-weight: 600;

  &:nth-child(2) {
    flex: 4 0 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &:nth-child(3) {
    flex: 3 0 0;
  }
  &:nth-child(4) {
    flex: 3 0 0;
  }
  &:nth-child(5) {
    flex: 6 0 0;
  }
  &:nth-child(6) {
    flex: 8 0 0;
  }
  &:nth-child(7) {
    flex: 4 0 0;
  }
  &:nth-child(8) {
    flex: 10 0 0;
  }
  &:nth-child(9) {
    flex: 2 0 0;
  }
`;

const ListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

import StyledBtn from "./common/StyledBtn";

const BtnContainer = styled.div`
  border: 1px solid pink;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const PreviewLink = styled(StyledLink)`
  width: 750px;
  height: 175px;
  position: relative;
`;

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
        <BtnContainer>
          <StyledLink to="/AddPlan">
            <AddPlanBtn>+ Add Plan</AddPlanBtn>
          </StyledLink>
        </BtnContainer>
      </AddPlanWrapper>
    </HeaderWrapper>
  );
};

const NoConnection = () => {
  const NoConnectionWrapper = styled(FlexCenter)`
    flex-direction: column;
    height: 400px;
  `;

  const Alert = styled.div`
    &:first-child {
      font-size: 24px;
    }
    &:nth-child(2) {
      font-size: 18px;
    }
    margin: 5px 0;
  `;

  return (
    <NoConnectionWrapper>
      <Alert>Wallet Connection Not Found.</Alert>
      <Alert>Please connect wallet first.</Alert>
    </NoConnectionWrapper>
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

const Plan = () => {
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

const PlanContainer = () => {
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
<<<<<<< HEAD
      <ListHeader />
      <OuterWrapper>
        <Indexes>
          <Index />
          <Index>
            <span>Plan</span>
            <span>Volume</span>
          </Index>
          <Index>APR</Index>
          <Index>Duration</Index>
          <Index>Earn</Index>
          <Index>Status</Index>
          <Index>Action</Index>
          <Index />
        </Indexes>
        <PreviewLink to="/Loan">
          <ListWrapper>
            {dummyData.map((e) => (
              <PlanItem
                originalPrice={e.originalPrice}
                apr={e.apr}
                duration={e.duration}
                earn={e.earn}
                status={e.status}
              />
            ))}
          </ListWrapper>
        </PreviewLink>
      </OuterWrapper>
=======
      {isConnected ? (
        <>
          <ListHeader />
          <PlanContainer />
        </>
      ) : (
        <NoConnection />
      )}
>>>>>>> 0564f86391e3bf10ee4a9db0f742fbbfdf7d4acb
    </div>
  );
};

export default PlanList;
