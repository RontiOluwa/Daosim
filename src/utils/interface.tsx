export interface InputField {
  type: string;
  placeholder: string;
  setValue: (e: string) => void;
}

export interface ButtonField {
  text: string;
  action: any;
}

export interface TransferField {
  amount: string;
  address: string;
}
