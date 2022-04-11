import React, { useEffect, useState } from "react";
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

const LendHeaderStyle = styled(FlexCenter)`
  width: 80%;
  justify-content: space-around;
`;

const DescriptionWrapper = styled.div``;

const ConnectBtn = styled(FlexCenter)`
  cursor: pointer;
  width: 200px;
  height: 50px;
  border: 1px solid black;
  font-size: 18px;
  background-color: pink;
  border-radius: 10px;
`;

// components below

const NoMetamask = () => {
  return <div>Install Metamask to connect.</div>;
};

const ConnectWallet = () => {
  const handleConnect = async () => {
    window.ethereum.request({ method: "eth_requestAccounts" });
  };

  return (
    <ConnectBtn onClick={handleConnect}>
      <span>Connect Wallet</span>
    </ConnectBtn>
  );
};

const BorrowHeader = ({
  dummyAccount,
  switchToAsset,
  switchToLoan,
  curTab,
}) => {
  return (
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
  );
};

const LendHeader = ({ dummyAccount }) => {
  return (
    <LendHeaderStyle>
      <DescriptionWrapper>
        <Description>Total Loan Volume in Progress</Description>
        <Amount>{dummyAccount.inprogress} wETH</Amount>
      </DescriptionWrapper>
      <div>
        <Description>Total Earn</Description>
        <Amount>{dummyAccount.totalearn} wETH</Amount>
      </div>
    </LendHeaderStyle>
  );
};

const InnerHeader = ({ switchToAsset, switchToLoan, curTab }) => {
  const dummyAccount = {
    available: 3,
    address: `0x6C2b602b66697480f68b1e6006fccF839666d90d`,
    inprogress: 5,
    totalearn: 10,
  };
  const location = useLocation();
  const ethereum = window.ethereum || "undefined";

  console.log("이너 헤드", window.ethereum);
  console.log("isConnected");

  // useEffect(() => {
  //   if (typeof window.ethereum !== "undefined" && ethereum.isConnected()) {
  //   }
  // }, []);

  return (
    <InnerHeaderContainer>
      {typeof window.ethereum === "undefined" ? (
        <NoMetamask />
      ) : typeof window.ethereum !== "undefined" && ethereum.isConnected() ? (
        <>
          <WalletInfo />
          {location.pathname === "/borrow" ? (
            <BorrowHeader
              dummyAccount={dummyAccount}
              switchToAsset={switchToAsset}
              switchToLoan={switchToLoan}
              curTab={curTab}
            />
          ) : (
            <LendHeader dummyAccount={dummyAccount} />
          )}
        </>
      ) : (
        <ConnectWallet />
      )}
    </InnerHeaderContainer>
  );
};

export default InnerHeader;
