import { useEtherBalance, useEthers } from "@usedapp/core";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  const { activateBrowserWallet, account } = useEthers();
  const etherBalance = useEtherBalance(account);
  const location = useLocation();
  return (
    <div className="Nav">
      <div>
        <div>
          <ul>
            <li className="float-left">
              <a className="text-2xl font-bold">Doaism</a>
            </li>
            {account ? (
              <>
                <li className="float-right ml-7">
                  <Link to="/profile">View Profile</Link>
                </li>
                <li className="float-right">
                  {location.pathname == "/" ? (
                    <Link to="/transfer">Transfer</Link>
                  ) : (
                    <Link to="/">Mint</Link>
                  )}
                </li>
              </>
            ) : (
              <li className="float-right">
                <button
                  onClick={() => activateBrowserWallet()}
                  className="px-4 py-2 font-semibold text-sm bg-sky-500 text-white rounded-md shadow-sm opacity-100 mt-5 m-auto"
                >
                  Connect Wallet
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;
