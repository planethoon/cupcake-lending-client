import styled from "styled-components";
import FlexCenter from "./common/FlexCenter";
import StyledBtn from "./common/StyledBtn";

const ItemWrapper = styled.div`
  border: 1px solid blue;
  border-radius: 10px;
  width: 95%;
  height: 60px;
  display: flex;
  justify-content: center;
  margin: 5px 0;
`;

const Preview = styled(FlexCenter)`
  width: 50px;
  height: 50px;
  & > img {
    width: 50px;
    height: 50px;
    object-fit: cover;
  }
`;

const Value = styled(FlexCenter)`
  /* border: 1px solid black; */

  &:nth-child(1) {
    flex: 1 0 0;
  }
  &:nth-child(2) {
    flex: 5 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &:nth-child(3) {
    flex: 8 0 0;
  }
  &:nth-child(4) {
    flex: 4 0 0;
  }
  &:nth-child(5) {
    flex: 8 0 0;
  }
  &:nth-child(6) {
    flex: 8 0 0;
  }
  &:nth-child(7) {
    flex: 20 0 0;
  }
  &:nth-child(8) {
    flex: 8 0 0;
  }
  &:nth-child(9) {
    flex: 8 0 0;
  }
  &:nth-child(10) {
    flex: 1 0 0;
  }
`;

const Btn = styled(StyledBtn)`
  background-color: pink;
`;

// 정렬 차후에 픽셀단위로 변경 예정

const LoanListItem = ({
  img,
  originalPrice,
  apr,
  duration,
  earn,
  createdAt,
  status,
  setIsModalActive,
  loanInfo,
  setCurLoan,
}) => {
  const duedate = new Date((createdAt + duration) * 1000);

  return (
    <ItemWrapper>
      <Value />
      <Value>
        <Preview>
          <img src={img} alt="preview" />
        </Preview>
      </Value>
      <Value>{`${originalPrice} wETH`}</Value>
      <Value>{apr}</Value>
      <Value>{`${duration / 86400} Days`}</Value>
      <Value>{`${earn} wETH`}</Value>
      <Value>{`${duedate.getFullYear().toString().slice(-2)}-${
        duedate.getMonth() + 1
      }-${duedate.getDate()} ${duedate.getHours()}:${duedate.getMinutes()}:${duedate.getSeconds()} ${duedate
        .toString()
        .slice(25, 33)}`}</Value>
      <Value>{status}</Value>
      <Value>
        {status === "inprogress" ? (
          <Btn
            onClick={() => {
              setIsModalActive(true);
              setCurLoan(loanInfo);
            }}
          >
            Repay
          </Btn>
        ) : null}
      </Value>
      <Value />
    </ItemWrapper>
  );
};

export default LoanListItem;
