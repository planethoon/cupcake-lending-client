import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Lend from "./pages/Lend";
import Borrow from "./pages/Borrow";
import NotFound from "./pages/NotFound";
import NftCard from "./pages/NftCard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/borrow" element={<Borrow />} />
        <Route path="/lend" element={<Lend />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/NftCard" element={<NftCard />} />
      </Routes>
    </div>
  );
}

export default App;
