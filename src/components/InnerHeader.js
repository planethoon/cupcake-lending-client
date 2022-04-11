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

const ConnectWallet = ({ setAccount, setNetwork }) => {
  const ethereum = window.ethereum;
  const handleConnect = async () => {
    ethereum.request({ method: "eth_requestAccounts" }).then((res) => {
      setAccount(res[0]);
    });
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

const InnerHeader = ({
  switchToAsset,
  switchToLoan,
  curTab,
  isConnected,
  setIsConnected,
  account,
  setAccount,
  chainId,
}) => {
  const dummyAccount = {
    available: 3,
    address: `0x6C2b602b66697480f68b1e6006fccF839666d90d`,
    inprogress: 5,
    totalearn: 10,
  };
  const location = useLocation();

  const [network, setNetwork] = useState("No Network");

  useEffect(() => {
    if (chainId === "0x1") {
      setNetwork("Ethereum MainNet");
    } else if (chainId === "0x3") {
      setNetwork("Ropsten TestNet");
    } else if (chainId === "0x4") {
      setNetwork("Rinkeby TestNet");
    } else if (chainId === "0x5") {
      setNetwork("Goerli TestNet");
    } else if (chainId === "0x2a") {
      setNetwork("Kovan TestNet");
    } else {
      setNetwork("Unknown Network");
    }
  }, [chainId]);

  return (
    <InnerHeaderContainer>
      {typeof window.ethereum === "undefined" ? (
        <NoMetamask />
      ) : isConnected ? (
        <>
          <WalletInfo account={account} network={network} />
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
        <ConnectWallet setAccount={setAccount} />
      )}
    </InnerHeaderContainer>
  );
};

export default InnerHeader;
