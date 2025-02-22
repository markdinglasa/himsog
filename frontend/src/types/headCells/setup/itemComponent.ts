import { HeadCell } from "../../components";
import { ItemComponentTable } from "../../dbtables";

export const itemComponentHC: HeadCell<ItemComponentTable>[] = [
  {
    Id: "ItemDescription",
    numeric: false,
    disablePadding: false,
    label: "Item",
  },
  {
    Id: "ComponentCount",
    numeric: true,
    disablePadding: false,
    label: "Component(s)",
  },
  {
    Id: "IsPackage",
    numeric: true,
    disablePadding: false,
    label: "Package",
  },
  {
    Id: "PackageCount",
    numeric: true,
    disablePadding: false,
    label: "Package(s)",
  },
];
export const componentsHC: HeadCell<ItemComponentTable>[] = [
  {
    Id: "ComponentDescription",
    numeric: false,
    disablePadding: false,
    label: "Component",
  },
  {
    Id: "UnitName",
    numeric: false,
    disablePadding: false,
    label: "Unit",
  },
  {
    Id: "Cost",
    numeric: true,
    disablePadding: false,
    label: "Cost",
  },
  {
    Id: "Quantity",
    numeric: true,
    disablePadding: false,
    label: "Quantity",
  },
  {
    Id: "Amount",
    numeric: true,
    disablePadding: false,
    label: "Amount",
  },
  {
    Id: "IsPrinted",
    numeric: true,
    disablePadding: false,
    label: "Printed",
  },
  {
    Id: "QuantityOnHand",
    numeric: true,
    disablePadding: false,
    label: "Stocks",
  },
  {
    Id: "Id",
    numeric: true,
    disablePadding: false,
    label: "Actions",
  },
];
