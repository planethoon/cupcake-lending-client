import React from "react";
import styled from "styled-components";
import FlexCenter from "./common/FlexCenter";

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

const ListHeader = () => {
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

const PlanList = () => {
  return (
    <div>
      <ListHeader />
    </div>
  );
};

export default PlanList;
