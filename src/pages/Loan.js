import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

// styles below
import Background from "../components/common/Background";
import Container from "../components/common/Container";
import OuterHeader from "../components/OuterHeader";
import StyledBtn from "../components/common/StyledBtn";
import StyledLink from "../components/common/StyledLink";
import FlexCenter from "../components/common/FlexCenter";
import LoanList from "../components/borrow/LoanList";
import LoanTitle from "../components/loan/LoanTitle";

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

const RepayModal = ({ account, loanInfo, setIsModalActive }) => {
  const { img, originalPrice, apr, duration, earn } = loanInfo;

  console.log("론 정보", loanInfo);

  const repayLoan = () => {
    console.log("Request Repay Loan");
    setIsModalActive(false);
  };

  return (
    <ModalWrapper>
      <ModalBackground
        onClick={() => {
          setIsModalActive(false);
        }}
      />
      <ModalContainer>
        <Header>Repaying Loan</Header>
        <LoanInfo>
          <Image>
            <img src={img} alt="preview" />
          </Image>
          <Value>
            <span>Loan Volume</span>
            <span>{`${originalPrice} wETH`}</span>
          </Value>
          <Value>
            <span>APR</span>
            <span>{apr}</span>
          </Value>
          <Value>
            <span>Duration</span>
            <span>{`${duration / 86400} Days`}</span>
          </Value>
          <Value>
            <span>Repayment</span>
            <span>{`${earn} wETH`}</span>
          </Value>
        </LoanInfo>
        <AccountInfo>
          <Text>
            <span>Make sure transfer</span>
            <span>{` ${earn} wETH`}</span>
          </Text>
          <Text>
            <span>from </span>
            <span>{`${account}`}</span>
          </Text>
        </AccountInfo>
        <BtnWrapper>
          <Btn
            onClick={() => {
              setIsModalActive(false);
            }}
          >
            Cancel
          </Btn>
          <Btn onClick={repayLoan}>Accept</Btn>
        </BtnWrapper>
      </ModalContainer>
    </ModalWrapper>
  );
};

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
        <RepayModal
          setIsModalActive={setIsModalActive}
          loanInfo={curLoan}
          account={account}
        />
      ) : null}
    </Background>
  );
};

export default Loan;

//Style below

const ModalWrapper = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
`;

const ModalContainer = styled.div`
  width: 600px;
  height: 400px;
  border: 1px solid black;
  position: absolute;
  background-color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ModalBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: #80808080;
  cursor: pointer;
`;

const Header = styled(FlexCenter)`
  height: 50px;
  background-color: #36c766;
  font-size: 22px;
  font-weight: 600;
`;

const LoanInfo = styled(FlexCenter)`
  height: 125px;
  margin: 10px 0;
`;

const Image = styled.div`
  width: 100px;
  height: 100px;
  margin: 0 8px;
  & > img {
    width: 100px;
    height: 100px;
    object-fit: cover;
  }
`;

const Value = styled(FlexCenter)`
  flex-direction: column;
  font-size: 18px;
  width: 130px;
  & > span {
    margin: 10px 0;
  }
  &:nth-child(3) {
    width: 100px;
  }
  &:nth-child(4) {
    width: 100px;
  }
`;

const AccountInfo = styled(FlexCenter)`
  flex-direction: column;
  height: 120px;
  width: 100%;
`;

const Text = styled.div`
  font-size: 18px;
  margin: 2px 0;
  & > span:nth-child(2) {
    font-weight: 800;
  }
`;

const BtnWrapper = styled(FlexCenter)`
  margin-top: 20px;
`;

const Btn = styled(StyledBtn)`
  height: 40px;
  width: 80px;
  &:first-child {
    background-color: #ff9591;
  }
  &:last-child {
    background-color: #6fc98d;
  }
`;
