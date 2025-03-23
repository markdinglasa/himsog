import { HeadCell } from "../../components";
import { PaymentTable } from "../../dbtables";

export const paymentHC: HeadCell<PaymentTable>[] = [
  {
    Id: "TransactionDate",
    numeric: false,
    disablePadding: false,
    label: "Transaction Date",
  },
  {
    Id: "UserId",
    numeric: false,
    disablePadding: false,
    label: "Client",
  },
  {
    Id: "Amount",
    numeric: true,
    disablePadding: false,
    label: "Amount",
  },
  {
    Id: "Status",
    numeric: true,
    disablePadding: false,
    label: "Status",
  },
];
