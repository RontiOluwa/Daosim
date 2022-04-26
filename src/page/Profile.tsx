import { Mainnet, useEtherBalance, useEthers, Config } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";
import { getDefaultProvider } from "ethers";

function Profile() {
  const { account } = useEthers();
  const etherBalance = useEtherBalance(account);
  return (
    <div className="profile">
      {account && <p className="text-xl">Account: {account}</p>}
      {etherBalance && (
        <p className="text-xl mt-5">Balance: {formatEther(etherBalance)} ETH</p>
      )}
    </div>
  );
}

export default Profile;
