import { HeadCell } from "../../components";
import { CollectionLineTable } from "../../dbtables";

export const collectionLineHC: HeadCell<CollectionLineTable>[] = [
  {
    Id: "Amount",
    numeric: false,
    disablePadding: true,
    label: "Amount",
  },
  {
    Id: "PayTypeName",
    numeric: false,
    disablePadding: false,
    label: "Pay Type",
  },
  /*{
    Id: "CheckNumber",
    numeric: true,
    disablePadding: false,
    label: "Check No.",
  },
  {
    Id: "CheckDate",
    numeric: true,
    disablePadding: false,
    label: "Check Date",
  },
  {
    Id: "CheckBank",
    numeric: true,
    disablePadding: false,
    label: "Check Bank",
  },
  {
    Id: "CreditCardVerificationCode",
    numeric: true,
    disablePadding: false,
    label: "Verification Code",
  },
  {
    Id: "CreditCardNumber",
    numeric: true,
    disablePadding: false,
    label: "CC No.",
  },
  {
    Id: "CreditCardBank",
    numeric: true,
    disablePadding: false,
    label: "CC Bank ",
  },
  {
    Id: "GiftCertificateNumber",
    numeric: true,
    disablePadding: false,
    label: "GC No. ",
  },
  {
    Id: "GiftCertificateNumber",
    numeric: true,
    disablePadding: false,
    label: "GC No. ",
  },
  {
    Id: "OtherInformation",
    numeric: true,
    disablePadding: false,
    label: "Other Info",
  },*/
  {
    Id: "AccountName",
    numeric: true,
    disablePadding: false,
    label: "Account",
  },
  {
    Id: "Id",
    numeric: true,
    disablePadding: false,
    label: "Actions",
  },
];
