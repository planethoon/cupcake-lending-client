# Cupcake Lending Client

# 🧁 Cupcake Lending

## **Overview**

NFT를 담보로 ERC20토큰을 대출받을 수 있는 **web3 전당 중개 플랫폼** 입니다.

## **기존 NFT 거래 서비스의 문제점**

- NFT 거래가 구매/판매에만 제한되어 있습니다.
  - NFT 소유자는 급전이 필요할 때, NFT를 팔아야만 합니다. 이는 NFT가 구매 또는 판매라는 경직된 유동성을 가지고 있기 때문입니다. 우리는 NFT를 팔지 않고도 어느정도의 유동성을 확보할 수 있게 중개 서비스를 제공합니다.
  - 토큰 소유자: 대부분의 Defi는 풀을 다른 사용자들과 공유하기 때문에 풀의 유동성에 따라 위험도도 달라집니다. 우리는 1:1로 매칭하여 안정적인 풀을 제공합니다.

## **Approach**

- NFT를 담보로 토큰을 **대출**할 수 있는 **1:1 전당 중개** 서비스
- NFT 소유자는 NFT를 팔지 않고도, NFT를 담보로 대출을 해서 급전을 가져올 수 있습니다.
- 토큰 소유자는 1:1 대출로 안전하게 원하는 조건(원금, 기한, 이자율)으로 수익을 창출할 수 있습니다.

## **MVP**

1. **로그인**
   1. 지갑 연결
2. **Borrower**
   1. 담보 맡길 NFT 선택
   2. 원하는 플랜 선택(기한, 이자율)
   3. 대출완료
3. **Lender**
   1. ‘충전하기' 버튼을 누르면 원하는 양의 토큰을 cupcake 컨트랙트에 충전(Transfer to contract)
   2. 참여하기 원하는 플랜 선택(기한, 이자율, 대출금액)
      1. 플랜옵션 :중단, 재개, 회수
4. **대출 과정**
   1. 담보 NFT는 cupcake 컨트랙트에게 전달
   2. ERC20 토큰을 Borrower에게 전달
5. **상환 과정**
   1. 담보 NFT는 Borrower에게 전달
   2. ERC20 토큰을 Lender에게 전달
6. **청산 과정**
   1. Lender가 청산 버튼을 누르면, 담보물 NFT를 Lender에게 전달
