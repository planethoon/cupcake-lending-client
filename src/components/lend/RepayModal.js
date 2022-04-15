import React from "react";
import styled from "styled-components";
import Web3 from "web3";
import abi from "../../abi";

import FlexCenter from "../common/FlexCenter";
import StyledBtn from "../common/StyledBtn";

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

const RepayModal = ({ account, loanInfo, setIsModalActive }) => {
  const { img, originalPrice, apr, duration, earn } = loanInfo;
  let web3 = new Web3(window.ethereum);

  const contractAddress = "0x97DF92cB70F885a8E35c4FB1A1BAc93c26A096D9";
  // const wethAddress = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2";
  const tokenAddress = "0x0af5474E2F30a7E90529aCE0eb0FB1fEe3ac0B1c";

  console.log("론 정보", loanInfo);

  const practice = async () => {
    const beginLoanCont = await new web3.eth.Contract(abi, tokenAddress, {
      from: account,
    });

    await beginLoanCont.methods
      .transferFrom(
        account,
        "0xD5f5d67AEdb3c54884C93Ee065a74f55ab0e886e",
        "0x" + Number(20 * 10 ** 18).toString(16)
      )
      .send({ from: account })
      .on("receipt", (receipt) => {
        console.log("트랜스퍼 영수증", receipt);
      });
  };

  const repayLoan = async () => {
    console.log("Request Repay Loan");

    const beginLoanCont = await new web3.eth.Contract(abi[4], contractAddress, {
      from: account,
    });

    const params = await [
      {
        from: account,
        to: contractAddress,
      },
    ];
    await window.ethereum.request({ method: "eth_sendTransaction", params });
    web3.setIsModalActive(false);
  };

  console.log(web3.eth);
  console.log(web3.eth.getAccounts());

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
          <Btn onClick={practice}>Accept</Btn>
        </BtnWrapper>
      </ModalContainer>
    </ModalWrapper>
  );
};

export default RepayModal;

//Style below
