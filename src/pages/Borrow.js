import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

// styles below
import Background from "../components/common/Background";
import Container from "../components/common/Container";
import OuterHeader from "../components/OuterHeader";

// components below
import InnerHeader from "../components/InnerHeader";
import AssetList from "../components/AssetList";
import LoanList from "../components/borrow/LoanList";
import NoConnection from "../components/NoConnection";
import RepayModal from "../components/lend/RepayModal";

const dummy = [
  { img: "https://via.placeholder.com/350", price: 0.2 },
  { img: "https://via.placeholder.com/250", price: 2 },
  { img: "https://via.placeholder.com/150", price: 5 },
  { img: "https://via.placeholder.com/650", price: 0.1 },
  { img: "https://via.placeholder.com/450x200", price: 5 },
  { img: "https://via.placeholder.com/250", price: 50 },
  { img: "https://via.placeholder.com/150", price: 0.5 },
  { img: "https://via.placeholder.com/650", price: 2 },
  { img: "https://via.placeholder.com/650", price: 8 },
  { img: "https://via.placeholder.com/650", price: 12 },
  { img: "https://via.placeholder.com/650", price: 102 },
  { img: "https://via.placeholder.com/650", price: 2 },
  { img: "https://via.placeholder.com/650", price: 10 },
  { img: "https://via.placeholder.com/650", price: 11 },
  { img: "https://via.placeholder.com/650", price: 0.3 },
];

const Borrow = ({
  isConnected,
  setIsConnected,
  account,
  setAccount,
  chainId,
  curTab,
  setCurTab,
}) => {
  const [loanlist, setLoanlist] = useState({});
  const [isModalActive, setIsModalActive] = useState(false);
  const [curLoan, setCurLoan] = useState({});

  // const [totalAmount, setTotalAmount] = useState(0);

  // useEffect(() => {
  //   let total;
  //   for (let i = 0; i < dummy.length; i++) {
  //     total = total + dummy["price"];
  //   }

  //   setTotalAmount(total);
  // }, []);

  const getLoanlist = () => {
    const endpoint = `https://localhost:3000/loanlist?b-borrowerAddress=${account}`;
    axios.get(endpoint).then((res) => {
      setLoanlist(res);
    });
  };

  useEffect(() => {
    getLoanlist();
  }, []);

  const switchToAsset = () => {
    setCurTab(`asset`);
    console.log(curTab);
  };

  const switchToLoan = () => {
    setCurTab(`loan`);
    console.log(curTab);
  };

  return (
    <Background>
      <OuterHeader />
      <Container>
        <InnerHeader
          switchToAsset={switchToAsset}
          switchToLoan={switchToLoan}
          curTab={curTab}
          account={account}
          setAccount={setAccount}
          isConnected={isConnected}
          setIsConnected={setIsConnected}
          chainId={chainId}
        />
        {isConnected ? (
          curTab === `asset` ? (
            <AssetList dummy={dummy} />
          ) : (
            <LoanList
              setIsModalActive={setIsModalActive}
              setCurLoan={setCurLoan}
            />
          )
        ) : (
          <NoConnection />
        )}
      </Container>
      {isModalActive ? (
        <RepayModal
          setIsModalActive={setIsModalActive}
          loanInfo={curLoan}
          account={account}
        />
      ) : null}
    </Background>
  );
};

export default Borrow;
