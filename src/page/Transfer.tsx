import { useState, useContext } from "react";
import { utils } from "ethers";
import Input from "../component/Input";
import Button from "../component/Button";
import { useContractFunction } from "@usedapp/core";
import { contract } from "../utils/Interact";
import swal from "sweetalert";
import Status from "../component/Status";

function Transfer() {
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [text, setText] = useState("Submit");

  // Creating state and send Object for the Transfer function
  const { state, send } = useContractFunction(contract, "transfer", {
    transactionName: "Transfer",
  });

  // Setting state value to show progress of the transaction
  const { status } = state;

  const transfer = async () => {
    // Conditional Statement to avoid empty data
    if (address === "" || amount === "") {
      // Warning Message if empty data sent
      swal({
        title: "Warning",
        text: "Empmty field not allowed",
        icon: "warning",
        dangerMode: true,
      });
    } else {
      setText("Loading......");
      // Trigger the send (Transfer) function
      void send(address, utils.parseEther(amount));
      setText("Submit");
    }
  };

  return (
    <div className="App">
      <h5 className="font-bold text-xl text-center">Transfer Token</h5>
      <Input type="text" placeholder="Enter Address" setValue={setAddress} />
      <Input type="number" placeholder="Enter Amout" setValue={setAmount} />
      {/* Set Status Value */}
      <Status status={status} />
      <Button text="Submit" action={transfer} />
    </div>
  );
}

export default Transfer;
