export enum CartSize {
  sm = "small",
  md = "medium",
  lg = "large",
}

export interface CartAmountProps {
  SalesNumber?: string;
  TrnDate?: string;
  CustomerName?: string;
  Amount: number;
  Size?: CartSize;
  Text?: string;
}
