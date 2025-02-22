import { Id, Logs } from "../../";

export interface PermissionTable extends Id, Logs {
  RoleId: number;
  RoleName?: string;
  AccessRightId: number;
  AccessRightName?: string;
}
export type PermissionTables = PermissionTable[];
export const PermissionInitial: PermissionTable = {
  RoleId: 0,
  AccessRightId: 0,
  CreatedBy: 0,
  DateCreated: new Date(),
};
