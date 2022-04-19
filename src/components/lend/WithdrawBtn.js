import React, { useState } from "react";
import styled from "styled-components";

import StyledBtn from "../common/StyledBtn";

const WithdrawBtn = () => {
  const withdrawLoan = () => {
    console.log("Request Withdraw Loan");
  };

  return (
    <>
      <Btn onClick={withdrawLoan}>Withdraw</Btn>
    </>
  );
};

export default WithdrawBtn;

const Btn = styled(StyledBtn)`
  background-color: pink;
  box-sizing: border-box;
  width: 90px;
`;
