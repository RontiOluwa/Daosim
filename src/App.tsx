import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useEthers } from "@usedapp/core";
import Nav from "./component/Nav";
import Transfer from "./page/Transfer";
import Mint from "./page/Mint";
import Profile from "./page/Profile";
import SUPPORTED_TEST_CHAINS from "./chain.json";

function App() {
  // Get Connect Address & Network Chain
  const { chainId, account }: any = useEthers();

  // Confirm if connected network is Rinkeby
  const isSupportedChain = SUPPORTED_TEST_CHAINS.includes(chainId);
  return (
    <div className="App p-4">
      <BrowserRouter>
        <Nav />
        <div className="max-w-screen-sm m-auto pt-20">
          {/* Conditional Statement to avoid Wrong network connection */}
          {isSupportedChain ? (
            // Creating Routes
            <Routes>
              <Route path="/" element={<Mint />} />
              <Route path="/transfer" element={<Transfer />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          ) : (
            // Error message if not connected to Rinkeby network
            <p className="text-center text-2xl">Set network to: Rinkeby</p>
          )}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
