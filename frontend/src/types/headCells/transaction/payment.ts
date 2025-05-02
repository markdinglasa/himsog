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
    Id: "UserFullname",
    numeric: false,
    disablePadding: false,
    label: "User",
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

export const paymentMealPlanHC: HeadCell<PaymentTable>[] = [
  {
    Id: "TransactionDate",
    numeric: false,
    disablePadding: false,
    label: "Transaction Date",
  },
  {
    Id: "UserFullname",
    numeric: false,
    disablePadding: false,
    label: "User",
  },
  {
    Id: "MealPlanPrice",
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
