import React, { useState } from "react";
import styled from "styled-components";

// styles below
import Background from "../components/common/Background";
import Container from "../components/common/Container";
import OuterHeader from "../components/OuterHeader";
import StyledBtn from "../components/common/StyledBtn";
import StyledLink from "../components/common/StyledLink";

// components below
import LoanTitle from "../components/LoanTitle";
import AssetList from "../components/AssetList";
import LoanList from "../components/LoanList";

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

const Loan = ({
  isConnected,
  setIsConnected,
  account,
  setAccount,
  chainId,
}) => {
  const [curTab, setCurTab] = useState(`asset`);

  // const [totalAmount, setTotalAmount] = useState(0);

  // useEffect(() => {
  //   let total;
  //   for (let i = 0; i < dummy.length; i++) {
  //     total = total + dummy["price"];
  //   }

  //   setTotalAmount(total);
  // }, []);

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
        <LoanTitle />
        <StyledLink to="/loaninfo">
          <LoanList />
        </StyledLink>
      </Container>
    </Background>
  );
};

export default Loan;
