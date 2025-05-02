import { Id } from "../../utils";

export interface RestaurantInformationTable extends Id {
  IsAutoPrintKitchenReport: boolean;
  IsShowCollectedTab: boolean;
  RestaurantView: string;
}
export const RestaurantInformationInitial: RestaurantInformationTable = {
  IsAutoPrintKitchenReport: false,
  IsShowCollectedTab: true,
  RestaurantView: "Scroll",
};

export interface RestaurantInformationLineTable extends Id {
  KitchenReport: string;
  Copies: number;
}
export type RestaurantInformationLineTables = RestaurantInformationLineTable[];
export const RestaurantInformationLineInitial: RestaurantInformationLineTable =
  {
    KitchenReport: "",
    Copies: 0,
  };
