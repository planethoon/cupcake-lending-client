import React from "react";
import styled from "styled-components";
import BorrowTab from "./BorrowTab";
import FlexCenter from "./common/FlexCenter";

// styles below

const InnerHeaderContainer = styled(FlexCenter)`
  flex-direction: column;
  background-color: skyblue;
  height: 200px;
`;

const Description = styled.div`
  font-size: 16px;
  margin: 8px 0;
`;

const Amount = styled(FlexCenter)`
  font-size: 36px;
  font-weight: 700;
`;

// components below

const InnerHeader = ({ switchToAsset, switchToLoan, curTab }) => {
  const dummyAccount = {
    amount: 3,
    address: `0x6C2b602b66697480f68b1e6006fccF839666d90d`,
  };

  return (
    <InnerHeaderContainer>
      <div>
        <Description>Total Amount Of Loans Available</Description>
        <Amount>{dummyAccount.amount} wETH</Amount>
      </div>
      <BorrowTab
        switchToAsset={switchToAsset}
        switchToLoan={switchToLoan}
        curTab={curTab}
      />
    </InnerHeaderContainer>
  );
};

export default InnerHeader;
