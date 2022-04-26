import { Routes, Route, BrowserRouter } from "react-router-dom";
import Nav from "./component/Nav";
import Transfer from "./page/Transfer";
import Mint from "./page/Mint";
import Profile from "./page/Profile";

function App() {
  return (
    <div className="App p-4">
      <BrowserRouter>
        <Nav />
        <div className="max-w-screen-sm m-auto pt-20">
          <Routes>
            <Route path="/" element={<Mint />} />
            <Route path="/transfer" element={<Transfer />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
