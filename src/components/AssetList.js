import React, { useEffect, useState } from "react";
import styled from "styled-components";

// style below
import FlexCenter from "./common/FlexCenter";
import StyledLink from "./common/StyledLink";

const AssetList = ({ dummy }) => {
  const DummyList = styled.div``;

  return (
    <Wrapper>
      <DummyList />
      <DummyList />
      <DummyList />
      <DummyList />
      {dummy.map((e) => {
        return (
          <Preview>
            <PreviewLink to="/NftCard">
              <PreviewImg src={e.img} alt={e.img} />
              <PriceWrapper>
                <PreviewPrice>{e.price} wETH</PreviewPrice>
              </PriceWrapper>
            </PreviewLink>
          </Preview>
        );
      })}
      <DummyList />
      <DummyList />
      <DummyList />
      <DummyList />
    </Wrapper>
  );
};

export default AssetList;

//Style below
const Wrapper = styled.div`
  height: 400px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px 5px;
  overflow-y: auto;
`;

const Preview = styled(FlexCenter)``;

const PreviewImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const PreviewLink = styled(StyledLink)`
  width: 175px;
  height: 175px;
  position: relative;
`;

const PreviewPrice = styled.span`
  display: inline-block;
  color: #f7ce00;
`;

const PriceWrapper = styled(FlexCenter)`
  width: 100%;
  height: 20px;
  position: absolute;
  bottom: 0px;

  background-color: #666666b3;
`;
