import { HeadCell } from "../../components";
import { PrinterConfigTable } from "../../dbtables";

export const printerConfigHC: HeadCell<PrinterConfigTable>[] = [
  {
    Id: "PaperType",
    numeric: false,
    disablePadding: true,
    label: "Name",
  },
  {
    Id: "PaperSize",
    numeric: false,
    disablePadding: false,
    label: "Paper Size",
  },
  {
    Id: "PrinterName",
    numeric: false,
    disablePadding: false,
    label: "Printer",
  },
  {
    Id: "Orientation",
    numeric: false,
    disablePadding: false,
    label: "Orientation",
  },
  {
    Id: "MarginTop",
    numeric: false,
    disablePadding: false,
    label: "Margin Top",
  },
  {
    Id: "MarginBottom",
    numeric: false,
    disablePadding: false,
    label: "Margin Bottom",
  },
  {
    Id: "MarginLeft",
    numeric: false,
    disablePadding: false,
    label: "Margin Left",
  },
  {
    Id: "MarginRight",
    numeric: false,
    disablePadding: false,
    label: "Margin Right",
  },
  {
    Id: "Id",
    numeric: true,
    disablePadding: false,
    label: "Actions",
  },
];
