import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Lend from "./pages/Lend";
import Borrow from "./pages/Borrow";
import NotFound from "./pages/NotFound";
import NftCard from "./pages/NftCard";
import Result from "./pages/Result";

function App() {
<<<<<<< HEAD
  const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
  const ethereum = window.ethereum;

  ethereum.on("chainChanged", (_chainId) => window.location.reload());

=======
>>>>>>> b679601223d04d4905ed67b163bec1512e68ccb6
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/borrow" element={<Borrow />} />
        <Route path="/lend" element={<Lend />} />
        <Route path="/nftcard" element={<NftCard />} />
        <Route path="/*" element={<NotFound />} />
<<<<<<< HEAD
=======
        <Route path="/NftCard" element={<NftCard />} />
        <Route path="/Result" element={<Result />} />
>>>>>>> b679601223d04d4905ed67b163bec1512e68ccb6
      </Routes>
    </div>
  );
}

export default App;
