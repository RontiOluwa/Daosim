import { Mainnet, useEtherBalance, useEthers, Config } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";
import { getDefaultProvider } from "ethers";

function Profile() {
  // Getting connected wallet address
  const { account } = useEthers();

  // Getting Balance of connected wallet address
  const etherBalance = useEtherBalance(account);
  return (
    <div className="profile">
      {/* Displaying connected wallet address */}
      {account && <p className="text-xl">Account: {account}</p>}
      {/* Displaying balance of connected wallet address */}
      {etherBalance && (
        <p className="text-xl mt-5">Balance: {formatEther(etherBalance)} ETH</p>
      )}
    </div>
  );
}

export default Profile;
