import { HeadCell } from "../../components";
import { PackageTable } from "../../dbtables";

export const packageHC: HeadCell<PackageTable>[] = [
  {
    Id: "PackageItemName",
    numeric: false,
    disablePadding: false,
    label: "Package",
  },
  {
    Id: "UnitName",
    numeric: true,
    disablePadding: false,
    label: "Unit",
  },
  {
    Id: "Quantity",
    numeric: true,
    disablePadding: false,
    label: "Quantity",
  },
  {
    Id: "IsOptional",
    numeric: true,
    disablePadding: false,
    label: "Optional",
  },
  {
    Id: "Id",
    numeric: true,
    disablePadding: false,
    label: "Actions",
  },
];
