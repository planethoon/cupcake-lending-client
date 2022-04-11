import React, { useState } from "react";
import styled from "styled-components";

// styles below
import Background from "../components/common/Background";
import Container from "../components/common/Container";
import OuterHeader from "../components/OuterHeader";

// components below
import PickaPlan from "../components/PickaPlan";

const CardList = styled.div`
  height: 400px;
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

const NftCard = () => {
  const [curTab, setCurTab] = useState(`asset`);

  return (
    <Background>
      <OuterHeader />
      <Container>
        <PickaPlan />
        <Card>nft</Card>
        <CardList>
          <Card>
            <CardContainer>
              <div>Duration: 14일</div>
              <div>APR: 20%</div>
              <div>Repay: 4wETH</div>
            </CardContainer>
          </Card>

          <Card>
            <CardContainer>
              {" "}
              <div>Duration: 30일</div>
              <div>APR: 30%</div>
              <div>Repay: 11wETH</div>
            </CardContainer>
          </Card>

          <Card>
            <CardContainer>
              {" "}
              <div>Duration: 90일</div>
              <div>APR: 40%</div>
              <div>Repay: 25wETH</div>
            </CardContainer>
          </Card>
          <div>대출을 진행하시겠습니까?</div>
        </CardList>
      </Container>
    </Background>
  );
};

export default NftCard;
