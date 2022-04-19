import React, { useState } from "react";
import styled from "styled-components";

import StyledBtn from "../common/StyledBtn";

const StopBtn = () => {
  const [isStopped, setIsStopped] = useState(false);

  const stopLoan = () => {
    console.log("Request Stop Loan");
  };

  const resumeLoan = () => {
    console.log("Request Resume Loan");
  };

  return (
    <>
      {isStopped ? (
        <Btn onClick={resumeLoan}>Resume</Btn>
      ) : (
        <Btn onClick={stopLoan}>Stop</Btn>
      )}
    </>
  );
};

export default StopBtn;

const Btn = styled(StyledBtn)`
  background-color: pink;
  box-sizing: border-box;
  width: 90px;
`;
