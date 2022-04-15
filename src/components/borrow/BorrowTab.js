import React from "react";
import styled from "styled-components";

//styles below
import FlexCenter from "../common/FlexCenter";
import StyledBtn from "../common/StyledBtn";

const BorrowTab = ({ switchToAsset, switchToLoan, curTab }) => {
  return (
    <BtnWrapper>
      {curTab === "asset" ? (
        <BtnSelected onClick={switchToAsset}>Assets</BtnSelected>
      ) : (
        <Btn onClick={switchToAsset}>Assets</Btn>
      )}
      {curTab !== "asset" ? (
        <BtnSelected onClick={switchToLoan}>Loans</BtnSelected>
      ) : (
        <Btn onClick={switchToLoan}>Loans</Btn>
      )}
    </BtnWrapper>
  );
};

export default BorrowTab;

//Style below

const BtnWrapper = styled(FlexCenter)`
  margin-top: 30px;
`;

const Btn = styled(StyledBtn)`
  background-color: grey;
`;

const BtnSelected = styled(Btn)`
  background-color: pink;
`;
