import React from "react";
import styled from "styled-components";
import FlexCenter from "../common/FlexCenter";

import LoanListItem from "./LoanListItem";

const dummyData = [
  {
    img: "https://via.placeholder.com/150",
    originalPrice: 2,
    apr: "40%",
    duration: 7776000,
    earn: 2.4,
    createdAt: 1648987946,
    status: "inprogress",
  },
  {
    img: "https://via.placeholder.com/150",
    originalPrice: 2,
    apr: "40%",
    duration: 7776000,
    earn: 2.4,
    createdAt: 1648987946,
    status: "inprogress",
  },
  {
    img: "https://via.placeholder.com/150",
    originalPrice: 2,
    apr: "40%",
    duration: 7776000,
    earn: 2.4,
    createdAt: 1648987946,
    status: "inprogress",
  },
  {
    img: "https://via.placeholder.com/150",
    originalPrice: 2,
    apr: "40%",
    duration: 7776000,
    earn: 2.4,
    createdAt: 1648987946,
    status: "overdue",
  },
  {
    img: "https://via.placeholder.com/150",
    originalPrice: 2,
    apr: "40%",
    duration: 7776000,
    earn: 2.4,
    createdAt: 1648987946,
    status: "overdue",
  },
  {
    img: "https://via.placeholder.com/150",
    originalPrice: 2,
    apr: "40%",
    duration: 7776000,
    earn: 2.4,
    createdAt: 1648987946,
    status: "complete",
  },
  {
    img: "https://via.placeholder.com/150",
    originalPrice: 2,
    apr: "40%",
    duration: 7776000,
    earn: 2.4,
    createdAt: 1648987946,
    status: "complete",
  },
];

const LoanList = ({ setIsModalActive, setCurLoan }) => {
  return (
    <OuterWrapper>
      <Indexes>
        <Index />
        <Index>
          <span>Loan</span>
          <span>Volume</span>
        </Index>
        <Index>APR</Index>
        <Index>Duration</Index>
        <Index>Repayment</Index>
        <Index>Due Date</Index>
        <Index>Status</Index>
        <Index>Action</Index>
        <Index />
      </Indexes>
      <ListWrapper>
        {dummyData.map((e) => (
          <LoanListItem
            img={e.img}
            originalPrice={e.originalPrice}
            apr={e.apr}
            duration={e.duration}
            earn={e.earn}
            createdAt={e.createdAt}
            status={e.status}
            setIsModalActive={setIsModalActive}
            setCurLoan={setCurLoan}
            loanInfo={e}
          />
        ))}
      </ListWrapper>
    </OuterWrapper>
  );
};

export default LoanList;

//Style below

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
  &:nth-child(1) {
    flex: 4 0 0;
  }
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
    flex: 4 0 0;
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
