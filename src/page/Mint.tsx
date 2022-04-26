import { useState, useContext } from "react";
import { utils } from "ethers";
import Input from "../component/Input";
import Button from "../component/Button";
import { useContractFunction } from "@usedapp/core";
import { contract } from "../utils/Interact";
import swal from "sweetalert";
import Status from "../component/Status";

function Mint() {
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [text, setText] = useState("Submit");

  const { state, send } = useContractFunction(contract, "mint", {
    transactionName: "Mint",
  });
  const { status } = state;

  const mint = async () => {
    if (address === "" || amount === "") {
      swal({
        title: "Warning",
        text: "Empmty field not allowed",
        icon: "warning",
        dangerMode: true,
      });
    } else {
      setText("Loading......");
      void send(address, utils.parseEther(amount));
      setText("Submit");
    }
  };

  return (
    <div className="Mint">
      <h5 className="font-bold text-xl text-center">Mint Token</h5>
      <Input type="text" placeholder="Enter Address" setValue={setAddress} />
      <Input type="number" placeholder="Enter Amout" setValue={setAmount} />
      <Status status={status} />
      <Button text={text} action={mint} />
    </div>
  );
}

export default Mint;
