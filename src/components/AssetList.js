import React from "react";
import styled from "styled-components";

// style below
import FlexCenter from "./common/FlexCenter";
import StyledLink from "./common/StyledLink";

const AssetList = () => {
  const dummy = [
    { img: "https://via.placeholder.com/350" },
    { img: "https://via.placeholder.com/250" },
    { img: "https://via.placeholder.com/150" },
    { img: "https://via.placeholder.com/650" },
    { img: "https://via.placeholder.com/450x200" },
    { img: "https://via.placeholder.com/250" },
    { img: "https://via.placeholder.com/150" },
    { img: "https://via.placeholder.com/650" },
    { img: "https://via.placeholder.com/650" },
    { img: "https://via.placeholder.com/650" },
    { img: "https://via.placeholder.com/650" },
    { img: "https://via.placeholder.com/650" },
    { img: "https://via.placeholder.com/650" },
    { img: "https://via.placeholder.com/650" },
    { img: "https://via.placeholder.com/650" },
  ];

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
  `;

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
            <PreviewLink to="/">
              <PreviewImg src={e.img} alt={e.img} />
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
