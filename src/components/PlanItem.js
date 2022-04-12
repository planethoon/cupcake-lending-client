import styled from "styled-components";
import FlexCenter from "./common/FlexCenter";

const ItemWrapper = styled.div`
  border: 1px solid blue;
  border-radius: 10px;
  width: 95%;
  height: 60px;
  display: flex;
  justify-content: center;
  margin: 5px 0;
`;

const Value = styled(FlexCenter)`
  /* border: 1px solid black; */

  &:nth-child(1) {
    flex: 1 0 0;
  }
  &:nth-child(2) {
    flex: 8 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &:nth-child(3) {
    flex: 10 0 0;
  }
  &:nth-child(4) {
    flex: 8 0 0;
  }
  &:nth-child(5) {
    flex: 12 0 0;
  }
  &:nth-child(6) {
    flex: 8 0 0;
  }
  &:nth-child(7) {
    flex: 20 0 0;
  }
  &:nth-child(8) {
    flex: 15 0 0;
  }
  &:nth-child(9) {
    flex: 8 0 0;
  }
  &:nth-child(10) {
    flex: 1 0 0;
  }
`;

// 정렬 차후에 픽셀단위로 변경 예정

const PlanItem = ({
  originalPrice,
  apr,
  duration,
  earn,

  status,
}) => {
  return (
    <ItemWrapper>
      <Value />

      <Value>{`${originalPrice} wETH`}</Value>
      <Value>{apr}</Value>
      <Value>{`${duration / 86400} Days`}</Value>
      <Value>{`${earn} wETH`}</Value>

      <Value>{status}</Value>
      <Value>action</Value>
      <Value />
    </ItemWrapper>
  );
};

export default PlanItem;
