import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Web3 from "web3";

// styles below
import Background from "../components/common/Background";
import Container from "../components/common/Container";
import OuterHeader from "../components/OuterHeader";
import StyledBtn from "../components/common/StyledBtn";
import StyledLink from "../components/common/StyledLink";

// components below
import PickaPlan from "../components/PickaPlan";

const CardList = styled.div`
  height: 200px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px 5px;
  overflow-y: auto;
  align-content: center;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  jjustify-content: center;
`;

const Card = styled.div`
  flex-direction: column;
  background-color: lightgray;
  height: 100px;
  position: relative;
  margin: 20px;
`;

const LandingBtn = styled(StyledBtn)`
  background-color: grey;
  width: 100px;
`;

const BtnContainer = styled.div`
  border: 1px solid pink;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const Title = styled.div`
  display: flex;
  font-size: 24px;
  margin: 20px 0;
  justify-content: center;
`;

function AddPlan() {
  const [web3, setWeb3] = useState();
  const [account, setAccount] = useState("");

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const web = new Web3(window.ethereum);
        setWeb3(web);
      } catch (err) {
        console.log(err);
      }
    }
  }, []);

  const connectWallet = async () => {
    var accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    setAccount(accounts[0]);
  };
  return (
    <Background>
      <OuterHeader />
      <Container>
        <PickaPlan />

        <CardList>
          <Card>
            <CardContainer>
              <div>Duration: 14일</div>
              <div>APR: 20%</div>
            </CardContainer>
          </Card>

          <Card>
            <CardContainer>
              {" "}
              <div>Duration: 30일</div>
              <div>APR: 30%</div>
            </CardContainer>
          </Card>

          <Card>
            <CardContainer>
              {" "}
              <div>Duration: 90일</div>
              <div>APR: 40%</div>
            </CardContainer>
          </Card>
        </CardList>
        <Title>플랜을 참여하시겠습니까?</Title>
        <BtnContainer>
          <StyledLink to="/lend">
            <LandingBtn>NO</LandingBtn>
          </StyledLink>
          <LandingBtn
            onClick={() => {
              connectWallet();
            }}
          >
            <StyledLink to="/LendResult">YES</StyledLink>
          </LandingBtn>
        </BtnContainer>
      </Container>
    </Background>
  );
}

export default AddPlan;
