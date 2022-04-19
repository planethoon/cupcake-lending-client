import React from "react";
import styled from "styled-components";

import FlexCenter from "../common/FlexCenter";
import StyledBtn from "../common/StyledBtn";

const ClaimModal = ({ account, loanInfo, setIsModalActive }) => {
  const { img, originalPrice } = loanInfo;

  console.log("론 정보", loanInfo);

  const claimNFT = () => {
    console.log("Claim NFT");
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
        <Header>Your Loan is Liquidated!</Header>
        <LoanInfo>
          <Image>
            <img src={img} alt="preview" />
          </Image>
          <Value>
            <span>Loan Volume</span>
            <span>{`${originalPrice} wETH`}</span>
          </Value>
        </LoanInfo>
        <AccountInfo>
          <Text>
            <span>Make sure transfer</span>
            <span>{` NFT #0000`}</span>
          </Text>
          <Text>
            <span>to </span>
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
          <Btn onClick={claimNFT}>Accept</Btn>
        </BtnWrapper>
      </ModalContainer>
    </ModalWrapper>
  );
};

export default ClaimModal;

//

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
  & > span:nth-child(2) {
    font-weight: 800;
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
