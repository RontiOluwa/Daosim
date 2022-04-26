import { ButtonField } from "../utils/interface";
import { useEthers } from "@usedapp/core";

function Button({ text, action }: ButtonField) {
  const { account } = useEthers();

  return (
    <div className="Input text-center">
      <button
        disabled={account ? false : true}
        className="px-4 py-2 font-semibold text-sm bg-sky-500 text-white rounded-md shadow-sm opacity-100 mt-5 m-auto w-full"
        onClick={action}
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
