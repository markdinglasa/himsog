import { HeadCell } from "../../components";
import { RestaurantInformationLineTable } from "../../dbtables";

export const restaurantHC: HeadCell<RestaurantInformationLineTable>[] = [
  {
    Id: "KitchenReport",
    numeric: false,
    disablePadding: true,
    label: "Kitchen Report",
  },
  {
    Id: "Copies",
    numeric: false,
    disablePadding: false,
    label: "Copies",
  },
  {
    Id: "Id",
    numeric: true,
    disablePadding: false,
    label: "Actions",
  },
];
