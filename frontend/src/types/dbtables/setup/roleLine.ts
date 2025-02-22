import { Id, Logs } from "../../utils";

export interface RoleLineTable extends Id, Logs {
  RoleId: number;
  RoleName?: string;
  UserId: number;
  UserName?: string;
  BranchId: number;
  BranchName?: string;
}
export type RoleLineTables = RoleLineTable[];
export const RoleLineInitial: RoleLineTable = {
  RoleId: 0,
  UserId: 0,
  DateCreated: new Date(),
  BranchId: 0,
};
