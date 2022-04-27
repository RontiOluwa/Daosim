import { useEtherBalance, useEthers } from "@usedapp/core";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  // Getting Connected walltet function and address
  const { activateBrowserWallet, account } = useEthers();

  // Geting balance of connected wallet
  const etherBalance = useEtherBalance(account);

  // Geting route method
  const location = useLocation();
  return (
    <div className="Nav">
      <div>
        <div>
          <ul>
            <li className="float-left">
              <a className="text-2xl font-bold">Doaism</a>
            </li>
            {/* Conditional statement to conrim metamask is connected */}
            {account ? (
              <>
                <li className="float-right ml-7">
                  <Link to="/profile">View Profile</Link>
                </li>
                <li className="float-right">
                  {/* Conditional Statement to confimr current route */}
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
                  // Calling the connect wallet function
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
