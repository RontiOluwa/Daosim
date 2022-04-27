import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useEthers } from "@usedapp/core";
import Nav from "./component/Nav";
import Transfer from "./page/Transfer";
import Mint from "./page/Mint";
import Profile from "./page/Profile";
import SUPPORTED_TEST_CHAINS from "./chain.json";

function App() {
  const { chainId, account }: any = useEthers();
  const isSupportedChain = SUPPORTED_TEST_CHAINS.includes(chainId);
  return (
    <div className="App p-4">
      <BrowserRouter>
        <Nav />
        <div className="max-w-screen-sm m-auto pt-20">
          {isSupportedChain ? (
            <Routes>
              <Route path="/" element={<Mint />} />
              <Route path="/transfer" element={<Transfer />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          ) : (
            <p className="text-center text-2xl">Set network to: Rinkeby</p>
          )}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
