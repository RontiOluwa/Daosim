import { ButtonField } from "../utils/interface";
import { useEthers } from "@usedapp/core";

function Button(this: any, { text, action }: ButtonField) {
  // Getting connected wallet address
  const { account } = useEthers();

  return (
    <div className="Input text-center">
      <button
        // Disable button if metamask not connected
        disabled={account ? false : true}
        className={`${
          // Adding a not allowed cursor to the button if metamask not connected
          !account && "cursor-not-allowed"
        } px-4 py-2 font-semibold text-sm bg-sky-500 text-white rounded-md shadow-sm opacity-100 mt-5 m-auto w-full`}
        onClick={action}
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
