import React from "react";
import styled from "styled-components";
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

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid red;
  height: 50px;
`;

const Title = styled(FlexCenter)`
  font-size: 24px;
  margin-left: 12px;
  font-weight: 600;
`;

const AddPlanWrapper = styled(FlexCenter)`
  margin-right: 12px;
`;

const AddPlanBtn = styled(FlexCenter)`
  border: 1px solid green;
  padding: 5px 10px;
  border-radius: 10px;
  background-color: green;
  color: white;
  cursor: pointer;
`;

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

const PlanList = () => {
  return (
    <div>
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
    </div>
  );
};

export default PlanList;
