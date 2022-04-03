import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

// styles below
import FlexCenter from "./common/FlexCenter";

// components below
import BorrowTab from "./BorrowTab";
import WalletInfo from "./WalletInfo";

const InnerHeaderContainer = styled(FlexCenter)`
  flex-direction: column;
  background-color: skyblue;
  height: 200px;
  position: relative;
`;

const Description = styled(FlexCenter)`
  font-size: 16px;
  margin: 8px 0;
`;

const Amount = styled(FlexCenter)`
  font-size: 36px;
  font-weight: 700;
`;

const LendHeader = styled(FlexCenter)`
  width: 80%;
  justify-content: space-around;
`;

const DescriptionWrapper = styled.div``;

// components below

const InnerHeader = ({ switchToAsset, switchToLoan, curTab }) => {
  const dummyAccount = {
    available: 3,
    address: `0x6C2b602b66697480f68b1e6006fccF839666d90d`,
    inprogress: 5,
    totalearn: 10,
  };

  const location = useLocation();

  return (
    <InnerHeaderContainer>
      <WalletInfo />
      {location.pathname === "/borrow" ? (
        <div>
          <div>
            <Description>Total Amount Of Available</Description>
            <Amount>{dummyAccount.available} wETH</Amount>
          </div>
          <BorrowTab
            switchToAsset={switchToAsset}
            switchToLoan={switchToLoan}
            curTab={curTab}
          />
        </div>
      ) : (
        <LendHeader>
          <DescriptionWrapper>
            <Description>Total Loan Volume in Progress</Description>
            <Amount>{dummyAccount.inprogress} wETH</Amount>
          </DescriptionWrapper>
          <div>
            <Description>Total Earn</Description>
            <Amount>{dummyAccount.totalearn} wETH</Amount>
          </div>
        </LendHeader>
      )}
    </InnerHeaderContainer>
  );
};

export default InnerHeader;
