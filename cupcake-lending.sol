//SPDX-Licencse-Identifier: MIT
pragma solidity ^0.8.7;
// import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

// import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";
import "@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol";
////////////////// ERC721 receiver 구현 필요!!!! //////////////////
library Address {
    /**
     * Returns whether the target address is a contract
     * @dev This function will return false if invoked during the constructor of a contract,
     * as the code is not actually created until after the constructor finishes.
     * @param account address of the account to check
     * @return whether the target address is a contract
     */
    function isContract(address account) internal view returns (bool) {
        uint256 size;
        // XXX Currently there is no better way to check if there is a contract in an address
        // than to check the size of the code at that address.
        // See https://ethereum.stackexchange.com/a/14016/36603
        // for more details about how this works.
        // TODO Check this again before the Serenity release, because all addresses will be
        // contracts then.
        // solhint-disable-next-line no-inline-assembly
        assembly {
            size := extcodesize(account)
        }
        return size > 0;
    }
}

/**
 * @title IERC165
 * @dev https://github.com/ethereum/EIPs/blob/master/EIPS/eip-165.md
 */
interface IERC165 {
    /**
     * @notice Query if a contract implements an interface
     * @param interfaceId The interface identifier, as specified in ERC-165
     * @dev Interface identification is specified in ERC-165. This function
     * uses less than 30,000 gas.
     */
    function supportsInterface(bytes4 interfaceId) external view returns (bool);
}

// File: contracts/NFTfi/v1/openzeppelin/IERC721.sol

/**
 * @title ERC721 Non-Fungible Token Standard basic interface
 * @dev see https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md
 */
abstract contract IERC721 is IERC165 {
    event Transfer(
        address indexed from,
        address indexed to,
        uint256 indexed tokenId
    );
    event Approval(
        address indexed owner,
        address indexed approved,
        uint256 indexed tokenId
    );
    event ApprovalForAll(
        address indexed owner,
        address indexed operator,
        bool approved
    );

    function balanceOf(address owner)
        public
        view
        virtual
        returns (uint256 balance);

    function ownerOf(uint256 tokenId)
        public
        view
        virtual
        returns (address owner);

    function approve(address to, uint256 tokenId) public virtual;

    function getApproved(uint256 tokenId)
        public
        view
        virtual
        returns (address operator);

    function setApprovalForAll(address operator, bool _approved) public virtual;

    function isApprovedForAll(address owner, address operator)
        public
        view
        virtual
        returns (bool);

    function transferFrom(
        address from,
        address to,
        uint256 tokenId
    ) public virtual;

    function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId
    ) public virtual;

    function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId,
        bytes memory data
    ) public virtual;
}

// File: contracts/NFTfi/v1/openzeppelin/IERC721Receiver.sol

/**
 * @title ERC721 token receiver interface
 * @dev Interface for any contract that wants to support safeTransfers
 * from ERC721 asset contracts.
 */
// abstract contract IERC721Receiver {
//     /**
//      * @notice Handle the receipt of an NFT
//      * @dev The ERC721 smart contract calls this function on the recipient
//      * after a `safeTransfer`. This function MUST return the function selector,
//      * otherwise the caller will revert the transaction. The selector to be
//      * returned can be obtained as `this.onERC721Received.selector`. This
//      * function MAY throw to revert and reject the transfer.
//      * Note: the ERC721 contract address is always the message sender.
//      * @param operator The address which called `safeTransferFrom` function
//      * @param from The address which previously owned the token
//      * @param tokenId The NFT identifier which is being transferred
//      * @param data Additional data with no specified format
//      * @return `bytes4(keccak256("onERC721Received(address,address,uint256,bytes)"))`
//      */
//     function onERC721Received(
//         address operator,
//         address from,
//         uint256 tokenId,
//         bytes memory data
//     ) public virtual returns (bytes4);
// }

// File: contracts/NFTfi/v1/openzeppelin/SafeMath.sol

/**
 * @title SafeMath
 * @dev Unsigned math operations with safety checks that revert on error
 */
library SafeMath {
    /**
     * @dev Multiplies two unsigned integers, reverts on overflow.
     */
    function mul(uint256 a, uint256 b) internal pure returns (uint256) {
        // Gas optimization: this is cheaper than requiring 'a' not being zero, but the
        // benefit is lost if 'b' is also tested.
        // See: https://github.com/OpenZeppelin/openzeppelin-solidity/pull/522
        if (a == 0) {
            return 0;
        }

        uint256 c = a * b;
        require(c / a == b);

        return c;
    }

    /**
     * @dev Integer division of two unsigned integers truncating the quotient, reverts on division by zero.
     */
    function div(uint256 a, uint256 b) internal pure returns (uint256) {
        // Solidity only automatically asserts when dividing by 0
        require(b > 0);
        uint256 c = a / b;
        // assert(a == b * c + a % b); // There is no case in which this doesn't hold

        return c;
    }

    /**
     * @dev Subtracts two unsigned integers, reverts on overflow (i.e. if subtrahend is greater than minuend).
     */
    function sub(uint256 a, uint256 b) internal pure returns (uint256) {
        require(b <= a);
        uint256 c = a - b;

        return c;
    }

    /**
     * @dev Adds two unsigned integers, reverts on overflow.
     */
    function add(uint256 a, uint256 b) internal pure returns (uint256) {
        uint256 c = a + b;
        require(c >= a);

        return c;
    }

    /**
     * @dev Divides two unsigned integers and returns the remainder (unsigned integer modulo),
     * reverts when dividing by zero.
     */
    function mod(uint256 a, uint256 b) internal pure returns (uint256) {
        require(b != 0);
        return a % b;
    }
}

// File: contracts/NFTfi/v1/openzeppelin/Address.sol

// File: contracts/NFTfi/v1/openzeppelin/ERC165.sol

/**
 * @title ERC165
 * @author Matt Condon (@shrugs)
 * @dev Implements ERC165 using a lookup table.
 */
contract ERC165 is IERC165 {
    bytes4 private constant _INTERFACE_ID_ERC165 = 0x01ffc9a7;
    /**
     * 0x01ffc9a7 ===
     *     bytes4(keccak256('supportsInterface(bytes4)'))
     */

    /**
     * @dev a mapping of interface id to whether or not it's supported
     */
    mapping(bytes4 => bool) private _supportedInterfaces;

    /**
     * @dev A contract implementing SupportsInterfaceWithLookup
     * implement ERC165 itself
     */
    constructor() {
        _registerInterface(_INTERFACE_ID_ERC165);
    }

    /**
     * @dev implement supportsInterface(bytes4) using a lookup table
     */
    function supportsInterface(bytes4 interfaceId)
        external
        view
        override
        returns (bool)
    {
        return _supportedInterfaces[interfaceId];
    }

    /**
     * @dev internal method for registering an interface
     */
    function _registerInterface(bytes4 interfaceId) internal {
        require(interfaceId != 0xffffffff);
        _supportedInterfaces[interfaceId] = true;
    }
}

// File: contracts/NFTfi/v1/openzeppelin/ERC721.sol

/**
 * @title ERC721 Non-Fungible Token Standard basic implementation
 * @dev see https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md
 */
contract ERC721 is ERC165, IERC721, ERC721Holder {
    using SafeMath for uint256;
    using Address for address;

    // Equals to `bytes4(keccak256("onERC721Received(address,address,uint256,bytes)"))`
    // which can be also obtained as `IERC721Receiver(0).onERC721Received.selector`
    bytes4 private constant _ERC721_RECEIVED = 0x150b7a02;

    // Mapping from token ID to owner
    mapping(uint256 => address) private _tokenOwner;

    // Mapping from token ID to approved address
    mapping(uint256 => address) private _tokenApprovals;

    // Mapping from owner to number of owned token
    mapping(address => uint256) private _ownedTokensCount;

    // Mapping from owner to operator approvals
    mapping(address => mapping(address => bool)) private _operatorApprovals;

    bytes4 private constant _INTERFACE_ID_ERC721 = 0x80ac58cd;

    /*
     * 0x80ac58cd ===
     *     bytes4(keccak256('balanceOf(address)')) ^
     *     bytes4(keccak256('ownerOf(uint256)')) ^
     *     bytes4(keccak256('approve(address,uint256)')) ^
     *     bytes4(keccak256('getApproved(uint256)')) ^
     *     bytes4(keccak256('setApprovalForAll(address,bool)')) ^
     *     bytes4(keccak256('isApprovedForAll(address,address)')) ^
     *     bytes4(keccak256('transferFrom(address,address,uint256)')) ^
     *     bytes4(keccak256('safeTransferFrom(address,address,uint256)')) ^
     *     bytes4(keccak256('safeTransferFrom(address,address,uint256,bytes)'))
     */

    constructor() public {
        // register the supported interfaces to conform to ERC721 via ERC165
        _registerInterface(_INTERFACE_ID_ERC721);
    }

   

    /**
     * @dev Gets the balance of the specified address
     * @param owner address to query the balance of
     * @return uint256 representing the amount owned by the passed address
     */
    function balanceOf(address owner) public view override returns (uint256) {
        require(owner != address(0));
        return _ownedTokensCount[owner];
    }

    /**
     * @dev Gets the owner of the specified token ID
     * @param tokenId uint256 ID of the token to query the owner of
     * @return owner address currently marked as the owner of the given token ID
     */
    function ownerOf(uint256 tokenId) public view override returns (address) {
        address owner = _tokenOwner[tokenId];
        require(owner != address(0));
        return owner;
    }

    /**
     * @dev Approves another address to transfer the given token ID
     * The zero address indicates there is no approved address.
     * There can only be one approved address per token at a given time.
     * Can only be called by the token owner or an approved operator.
     * @param to address to be approved for the given token ID
     * @param tokenId uint256 ID of the token to be approved
     */
    function approve(address to, uint256 tokenId) public override {
        address owner = ownerOf(tokenId);
        require(to != owner);
        require(msg.sender == owner || isApprovedForAll(owner, msg.sender));

        _tokenApprovals[tokenId] = to;
        emit Approval(owner, to, tokenId);
    }

    /**
     * @dev Gets the approved address for a token ID, or zero if no address set
     * Reverts if the token ID does not exist.
     * @param tokenId uint256 ID of the token to query the approval of
     * @return address currently approved for the given token ID
     */
    function getApproved(uint256 tokenId)
        public
        view
        override
        returns (address)
    {
        require(_exists(tokenId));
        return _tokenApprovals[tokenId];
    }

    /**
     * @dev Sets or unsets the approval of a given operator
     * An operator is allowed to transfer all tokens of the sender on their behalf
     * @param to operator address to set the approval
     * @param approved representing the status of the approval to be set
     */
    function setApprovalForAll(address to, bool approved) public override {
        require(to != msg.sender);
        _operatorApprovals[msg.sender][to] = approved;
        emit ApprovalForAll(msg.sender, to, approved);
    }

    /**
     * @dev Tells whether an operator is approved by a given owner
     * @param owner owner address which you want to query the approval of
     * @param operator operator address which you want to query the approval of
     * @return bool whether the given operator is approved by the given owner
     */
    function isApprovedForAll(address owner, address operator)
        public
        view
        override
        returns (bool)
    {
        return _operatorApprovals[owner][operator];
    }

    /**
     * @dev Transfers the ownership of a given token ID to another address
     * Usage of this method is discouraged, use `safeTransferFrom` whenever possible
     * Requires the msg sender to be the owner, approved, or operator
     * @param from current owner of the token
     * @param to address to receive the ownership of the given token ID
     * @param tokenId uint256 ID of the token to be transferred
     */
    function transferFrom(
        address from,
        address to,
        uint256 tokenId
    ) public override {
        require(_isApprovedOrOwner(msg.sender, tokenId));

        _transferFrom(from, to, tokenId);
    }

    /**
     * @dev Safely transfers the ownership of a given token ID to another address
     * If the target address is a contract, it must implement `onERC721Received`,
     * which is called upon a safe transfer, and return the magic value
     * `bytes4(keccak256("onERC721Received(address,address,uint256,bytes)"))`; otherwise,
     * the transfer is reverted.
     *
     * Requires the msg sender to be the owner, approved, or operator
     * @param from current owner of the token
     * @param to address to receive the ownership of the given token ID
     * @param tokenId uint256 ID of the token to be transferred
     */
    function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId
    ) public override {
        safeTransferFrom(from, to, tokenId, "");
    }

    /**
     * @dev Safely transfers the ownership of a given token ID to another address
     * If the target address is a contract, it must implement `onERC721Received`,
     * which is called upon a safe transfer, and return the magic value
     * `bytes4(keccak256("onERC721Received(address,address,uint256,bytes)"))`; otherwise,
     * the transfer is reverted.
     * Requires the msg sender to be the owner, approved, or operator
     * @param from current owner of the token
     * @param to address to receive the ownership of the given token ID
     * @param tokenId uint256 ID of the token to be transferred
     * @param _data bytes data to send along with a safe transfer check
     */
    function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId,
        bytes memory _data
    ) public override {
        transferFrom(from, to, tokenId);
        require(_checkOnERC721Received(from, to, tokenId, _data));
    }

    /**
     * @dev Returns whether the specified token exists
     * @param tokenId uint256 ID of the token to query the existence of
     * @return whether the token exists
     */
    function _exists(uint256 tokenId) internal view returns (bool) {
        address owner = _tokenOwner[tokenId];
        return owner != address(0);
    }

    /**
     * @dev Returns whether the given spender can transfer a given token ID
     * @param spender address of the spender to query
     * @param tokenId uint256 ID of the token to be transferred
     * @return bool whether the msg.sender is approved for the given token ID,
     *    is an operator of the owner, or is the owner of the token
     */
    function _isApprovedOrOwner(address spender, uint256 tokenId)
        internal
        view
        returns (bool)
    {
        address owner = ownerOf(tokenId);
        return (spender == owner ||
            getApproved(tokenId) == spender ||
            isApprovedForAll(owner, spender));
    }

    /**
     * @dev Internal function to mint a new token
     * Reverts if the given token ID already exists
     * @param to The address that will own the minted token
     * @param tokenId uint256 ID of the token to be minted
     */
    function _mint(address to, uint256 tokenId) internal {
        require(to != address(0));
        require(!_exists(tokenId));

        _tokenOwner[tokenId] = to;
        _ownedTokensCount[to] = _ownedTokensCount[to].add(1);

        emit Transfer(address(0), to, tokenId);
    }

    /**
     * @dev Internal function to burn a specific token
     * Reverts if the token does not exist
     * Deprecated, use _burn(uint256) instead.
     * @param owner owner of the token to burn
     * @param tokenId uint256 ID of the token being burned
     */
    function _burn(address owner, uint256 tokenId) internal {
        require(ownerOf(tokenId) == owner);

        _clearApproval(tokenId);

        _ownedTokensCount[owner] = _ownedTokensCount[owner].sub(1);
        _tokenOwner[tokenId] = address(0);

        emit Transfer(owner, address(0), tokenId);
    }

    /**
     * @dev Internal function to burn a specific token
     * Reverts if the token does not exist
     * @param tokenId uint256 ID of the token being burned
     */
    function _burn(uint256 tokenId) internal {
        _burn(ownerOf(tokenId), tokenId);
    }

    /**
     * @dev Internal function to transfer ownership of a given token ID to another address.
     * As opposed to transferFrom, this imposes no restrictions on msg.sender.
     * @param from current owner of the token
     * @param to address to receive the ownership of the given token ID
     * @param tokenId uint256 ID of the token to be transferred
     */
    function _transferFrom(
        address from,
        address to,
        uint256 tokenId
    ) internal {
        require(ownerOf(tokenId) == from);
        require(to != address(0));

        _clearApproval(tokenId);

        _ownedTokensCount[from] = _ownedTokensCount[from].sub(1);
        _ownedTokensCount[to] = _ownedTokensCount[to].add(1);

        _tokenOwner[tokenId] = to;

        emit Transfer(from, to, tokenId);
    }

    /**
     * @dev Internal function to invoke `onERC721Received` on a target address
     * The call is not executed if the target address is not a contract
     * @param from address representing the previous owner of the given token ID
     * @param to target address that will receive the tokens
     * @param tokenId uint256 ID of the token to be transferred
     * @param _data bytes optional data to send along with the call
     * @return whether the call correctly returned the expected magic value
     */
    function _checkOnERC721Received(
        address from,
        address to,
        uint256 tokenId,
        bytes memory _data
    ) internal returns (bool) {
        if (!to.isContract()) {
            return true;
        }

        bytes4 retval = IERC721Receiver(to).onERC721Received(
            msg.sender,
            from,
            tokenId,
            _data
        );
        return (retval == _ERC721_RECEIVED);
    }

    /**
     * @dev Private function to clear current approval of a given token ID
     * @param tokenId uint256 ID of the token to be transferred
     */
    function _clearApproval(uint256 tokenId) private {
        if (_tokenApprovals[tokenId] != address(0)) {
            _tokenApprovals[tokenId] = address(0);
        }
    }
}

// api
// 1. plan status (db) (중단/재개)
// 2. plan 골라주기 (서버에서 컨트랙트 호출해서 가져옴)
// 매치할 plan이 없는 경우 필요

contract Test is ERC721 {
    constructor() payable {}

    event AddNewPlan(
        address lender,
        uint256 initialBalance,
        uint256 planModelId,
        uint256 planId
    );
    event BeginLoan(
        address borrower,
        uint256 loanId,
        address nftContractAddr,
        uint256 tokenId,
        uint256 nftPrice,
        uint256 duration,
        uint256 startDate
    );
    event Repay(address lender, address borrower, uint256 loanId);
    event Liquidate(
        address lender,
        address nftContractAddr,
        uint256 tokenId,
        uint256 nftPrice
    );
    event Withdraw(address lender, uint256 withdrawAmount);
    event Repay2(uint256 actualDuration, uint256 actualAllowance, uint256 loanDuration, uint256 actualRepaymentFee);


    struct PlanModel {
        uint256 planModelId;
        uint256 duration;
        uint256 apr;
    }
    struct Plan {
        uint256 planId;
        uint256 planModelId;
        address lender;
        address erc20ContractAddr;
        uint256 initialBalance;
        uint256 availableBalance;
    }

    struct Loan {
        uint256 planModelId;
        uint256 planId;
        uint256 loanId;
        address nftContractAddr;
        uint256 tokenId;
        uint256 nftPrice;
        address borrower;
        loanStatus status;
        uint256 duration;
        uint256 startDate;
    }
    enum loanStatus {
        inProgress,
        liquidated,
        complete
    }

    mapping(uint256 => PlanModel) public planModels;
    mapping(uint256 => Loan) public loans;
    mapping(uint256 => Plan) public plans;
   
    uint256 public totalPlanModelNum = 0; //planModel 갯수
    uint256[] public planNumPerPlanModel; // planModel당 들어있는 plan의 갯수
    uint256 public totalPlanNum = 0; // 전체 plan 갯수
    uint256 public totalLoanNum = 0; // 전체 Loan 갯수

    function addNewPlanModel() public {
        // 임시로 하드코딩
        PlanModel memory p1 = PlanModel({
            planModelId: 0,
            duration: 1,
            apr: 365
        });
        PlanModel memory p2 = PlanModel({
            planModelId: 1,
            duration: 2592000,
            apr: 365
        });
        PlanModel memory p3 = PlanModel({
            planModelId: 2,
            duration: 2592000,
            apr: 365
        });

        planModels[0] = p1;
        planModels[1] = p2;
        planModels[2] = p3;
        planNumPerPlanModel.push(0);
        planNumPerPlanModel.push(0);
        planNumPerPlanModel.push(0);
        totalPlanModelNum = 3;
    }

    // 새로운 플랜 설정
    function addNewPlan(
        uint256 initialBalance,
        address erc20ContractAddr,
        uint256 planModelId
    ) public payable {
        // 미리 plan에 예치할 금액을 approve 했다고 가정

        IERC20(erc20ContractAddr).transferFrom(
            msg.sender,
            address(this),
            initialBalance
        );

        Plan memory newPlan = Plan({
            planId: totalPlanNum,
            planModelId: planModelId,
            lender: msg.sender,
            erc20ContractAddr: erc20ContractAddr,
            initialBalance: initialBalance,
            availableBalance: initialBalance
        });

        plans[totalPlanNum] = newPlan;
        planNumPerPlanModel[planModelId]++;
        totalPlanNum++;

        emit AddNewPlan({
            lender: msg.sender,
            initialBalance: initialBalance,
            planModelId: planModelId,
            planId: newPlan.planId
        });
    }

    // 론 시작
    function beginLoan(
        uint256 planId,
        address nftContractAddr,
        uint256 tokenId,
        uint256 nftPrice
    ) public payable {
        // borrower가 nft를 cupcake contract에 transfer 했다고 가정
        // 서버에서 직접 opensea api 호출해서 nftPrice를 계산하고, 거기에 맞는 plan 세개를 제공

        
        Plan storage plan = plans[planId];
        PlanModel storage model = planModels[plan.planModelId];
        require(IERC721(nftContractAddr).ownerOf(tokenId) == address(this));  // borrower가 nft를 contract에 보냈는지 확인
        IERC20(plan.erc20ContractAddr).transfer(msg.sender, nftPrice);
        
        plan.availableBalance -= nftPrice;

        Loan memory newLoan = Loan({
            planModelId: plan.planModelId,
            planId: plan.planId,
            loanId: totalLoanNum,
            nftContractAddr: nftContractAddr,
            tokenId: tokenId,
            nftPrice: nftPrice,
            borrower: msg.sender,
            status: loanStatus.inProgress,
            duration: model.duration,
            startDate: block.timestamp
        });

        loans[totalLoanNum] = newLoan;
        totalLoanNum++;

        emit BeginLoan({
            borrower: msg.sender,
            loanId: newLoan.loanId,
            nftContractAddr: newLoan.nftContractAddr,
            tokenId: newLoan.tokenId,
            nftPrice: newLoan.nftPrice,
            duration: newLoan.duration,
            startDate: newLoan.startDate
        });
    }

    // 상환
    function repay(uint256 loanId) public payable returns(uint256) {
        // price
        // borrower가 미리 approve 했다고 가정

        
        Loan storage loan = loans[loanId];
        Plan storage plan = plans[loan.planId];
        PlanModel storage model = planModels[plan.planModelId];

        uint256 actualAllowance = IERC20(plan.erc20ContractAddr).allowance(
            loan.borrower,
            address(this)
        );

        
        uint256 actualDuration = block.timestamp - loan.startDate;
        uint256 actualRepaymentFee = loan.nftPrice +
            loan.nftPrice *
            (model.apr / 360) *
            (actualDuration / (24 * 60 * 60));

        require(actualAllowance >= actualRepaymentFee);
        require(actualDuration < loan.duration);



        IERC721(loan.nftContractAddr).safeTransferFrom(
            address(this),
            loan.borrower,
            loan.tokenId
        );
        IERC20(plan.erc20ContractAddr).transfer(
            plan.lender,
            actualRepaymentFee
        );


        loan.status = loanStatus.complete;  // status 안변함

        plan.availableBalance += actualAllowance;  // balance 안변함

        emit Repay({
            lender: plan.lender,
            borrower: loan.borrower,
            loanId: loan.loanId
        });
    }

    // 청산
    function liquidate(uint256 loanId) public payable {
        // borrower가 미리 approve 했다고 가정

        Loan storage loan = loans[loanId];
        Plan storage plan = plans[loan.planId];

        require(block.timestamp > loan.startDate + loan.duration);

        loan.status = loanStatus.liquidated;

        IERC721(loan.nftContractAddr).safeTransferFrom(
            address(this),
            plan.lender,
            loan.tokenId
        );

        emit Liquidate({
            lender: plan.lender,
            nftContractAddr: loan.nftContractAddr,
            tokenId: loan.tokenId,
            nftPrice: loan.nftPrice
        });
    }

    // withdraw
    function withdraw(uint256 planId) public payable {
        Plan storage plan = plans[planId];
        require(plan.availableBalance>0);
        uint256 availableBalance = plan.availableBalance;
        plan.availableBalance = 0;
        IERC20(plan.erc20ContractAddr).transfer(plan.lender, availableBalance);

        emit Withdraw({lender: plan.lender, withdrawAmount: availableBalance});
    }

   

    ///////////////이후에할거///////////////

    //1. planModel CRUD
}
