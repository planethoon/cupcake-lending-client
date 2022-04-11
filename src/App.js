import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Lend from "./pages/Lend";
import Borrow from "./pages/Borrow";
import NotFound from "./pages/NotFound";
import NftCard from "./pages/NftCard";
import Result from "./pages/Result";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/borrow" element={<Borrow />} />
        <Route path="/lend" element={<Lend />} />
        <Route path="/nftcard" element={<NftCard />} />
        <Route path="/result" element={<Result />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
