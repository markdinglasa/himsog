import { HeadCell } from "../../components";
import { UnitTable } from "../../dbtables";

export const unitHC: HeadCell<UnitTable>[] = [
  {
    Id: "Name",
    numeric: false,
    disablePadding: false,
    label: "Name",
  },
  {
    Id: "Description",
    numeric: false,
    disablePadding: false,
    label: "Description",
  },
  {
    Id: "Id",
    numeric: true,
    disablePadding: false,
    label: "Actions",
  },
];
