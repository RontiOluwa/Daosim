import { InputField } from "../utils/interface";

function Input({ type, placeholder, setValue }: InputField) {
  const changeValue = (value: string) => {
    // Setting value of parent Input State
    setValue(value);
  };

  return (
    <label className="block mt-5">
      <span className="text-gray-700">{placeholder}</span>
      <input
        type={type}
        onChange={(e) => changeValue(e.target.value)}
        className="mt-1 block w-full border p-3"
        placeholder={placeholder}
      />
    </label>
  );
}

export default Input;
