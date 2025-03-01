import { BASE_URL } from "../../../shared";

export const UnitChannel = {
  UNIT_GET: "/setup/unit/get/:Id",
  UNIT_GET_ALL: "/setup/unit/get-all",
  UNIT_NEW: "/setup/unit",
  UNIT_REMOVE: "/setup/unit/remove/:Id",
  UNIT_UPDATE: "/setup/unit/update/:Id",
  UNIT: `${BASE_URL}/setup/unit`,
  UNIT_ID: `${BASE_URL}/setup/unit/:Id`,
};
