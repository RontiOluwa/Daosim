import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Rinkeby, DAppProvider, Config } from "@usedapp/core";
import { getDefaultProvider } from "ethers";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const config: Config = {
  readOnlyChainId: Rinkeby.chainId,
  readOnlyUrls: {
    [Rinkeby.chainId]: getDefaultProvider("rinkeby"),
  },
};

root.render(
  <React.StrictMode>
    <DAppProvider config={config}>
      <App />
    </DAppProvider>
  </React.StrictMode>
);

reportWebVitals();
