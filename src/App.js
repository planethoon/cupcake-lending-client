import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Lend from "./pages/Lend";
import Borrow from "./pages/Borrow";
import NotFound from "./pages/NotFound";
import NftCard from "./pages/NftCard";
import Result from "./pages/Result";
import AddPlan from "./pages/AddPlan";
import LendResult from "./pages/LendResult";
import Loan from "./pages/Loan";
import LoanInfo from "./pages/LoanInfo";

function App() {
  const ethereum = window.ethereum;
  const [account, setAccount] = useState(null);
  const [chainId, setChainId] = useState(null);
  const [curTab, setCurTab] = useState(`asset`);

  // console.log("체인 아이디 추적", chainId);

  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    ethereum.request({ method: "eth_chainId" }).then((res) => {
      setChainId(res);
    });

    ethereum.request({ method: "eth_accounts" }).then((res) => {
      if (!res.length) {
        // console.log("아직 연결 안됌");
        setIsConnected(false);
      } else {
        // console.log("연결됌!");
        setAccount(res[0]);
        setIsConnected(true);
      }
    });
  });

  ethereum.on("chainChanged", (_chainId) => {
    window.location.reload();
  });

  ethereum.on("accountsChanged", (acc) => {
    if (!acc.length) {
      window.location.reload();
      setIsConnected(false);
    } else {
      setAccount(acc[0]);
    }
  });

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/borrow"
          element={
            <Borrow
              isConnected={isConnected}
              setIsConnected={setIsConnected}
              account={account}
              setAccount={setAccount}
              chainId={chainId}
              curTab={curTab}
              setCurTab={setCurTab}
            />
          }
        />
        <Route
          path="/lend"
          element={
            <Lend
              isConnected={isConnected}
              setIsConnected={setIsConnected}
              account={account}
              setAccount={setAccount}
              chainId={chainId}
            />
          }
        />
        <Route path="/nftcard" element={<NftCard />} />
        <Route path="/result" element={<Result setCurTab={setCurTab} />} />
        <Route path="/addplan" element={<AddPlan />} />
        <Route path="/lendresult" element={<LendResult />} />
        <Route path="/loan" element={<Loan account={account} />} />
        <Route path="/loaninfo" element={<LoanInfo />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
