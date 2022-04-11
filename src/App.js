import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Lend from "./pages/Lend";
import Borrow from "./pages/Borrow";
import NotFound from "./pages/NotFound";
import NftCard from "./pages/NftCard";
import Web3 from "web3";

function App() {
  const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
  const ethereum = window.ethereum;

  ethereum.on("chainChanged", (_chainId) => window.location.reload());

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/borrow" element={<Borrow />} />
        <Route path="/lend" element={<Lend />} />
        <Route path="/nftcard" element={<NftCard />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
