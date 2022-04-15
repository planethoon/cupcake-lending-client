import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import FlexCenter from "./common/FlexCenter";
import StyledLink from "./common/StyledLink";

const OuterHeader = () => {
  const location = useLocation();

  console.log(location.pathname);

  return (
    <Wrapper>
      <Icon>🧁</Icon>
      <NavBtns>
        <StyledLink to="/borrow">
          {location.pathname === `/borrow` ? (
            <NavBtnsSelected>Borrow</NavBtnsSelected>
          ) : (
            <NavBtn>Borrow</NavBtn>
          )}
        </StyledLink>
        <StyledLink to="/lend">
          {location.pathname === `/lend` ? (
            <NavBtnsSelected>Lend</NavBtnsSelected>
          ) : (
            <NavBtn>Lend</NavBtn>
          )}
        </StyledLink>
      </NavBtns>
      <div></div>
    </Wrapper>
  );
};

export default OuterHeader;

//Style below

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 80px;

  border: 2px solid red;
`;

const Icon = styled(FlexCenter)`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translate(-50%, -50%);
  margin-left: 28px;
  font-size: 42px;
`;

const NavBtns = styled(FlexCenter)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: grey;
  width: 180px;
  height: 42px;
  justify-content: space-around;
  border-radius: 10px;
`;

const NavBtn = styled(FlexCenter)`
  border-radius: 10px;
  width: 80px;
  height: 32px;
`;

const NavBtnsSelected = styled(NavBtn)`
  background-color: pink;
`;
