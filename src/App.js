import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Lend from "./pages/Lend";
import Borrow from "./pages/Borrow";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={() => <Landing />} />
        <Route path="/borrow" element={() => <Borrow />} />
        <Route path="/lend" element={() => <Lend />} />
      </Routes>
      <div>initial setup</div>
    </div>
  );
}

export default App;
