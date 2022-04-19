import React, { useEffect, useState } from "react";
import axios from "axios";

// styles below
import Background from "../components/common/Background";
import Container from "../components/common/Container";
import OuterHeader from "../components/OuterHeader";
import LoanList from "../components/borrow/LoanList";
import LoanTitle from "../components/loan/LoanTitle";
import ClaimModal from "../components/loan/ClaimModal";

// components below

import AssetList from "../components/AssetList";

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

const Loan = ({ account, setAccount, chainId, curTab, setCurTab }) => {
  const [isModalActive, setIsModalActive] = useState(false);
  const [curLoan, setCurLoan] = useState({});

  return (
    <Background>
      <OuterHeader />
      <Container>
        <LoanTitle />
        <LoanList setIsModalActive={setIsModalActive} setCurLoan={setCurLoan} />
      </Container>
      {isModalActive ? (
        <ClaimModal
          setIsModalActive={setIsModalActive}
          loanInfo={curLoan}
          account={account}
        />
      ) : null}
    </Background>
  );
};

export default Loan;
