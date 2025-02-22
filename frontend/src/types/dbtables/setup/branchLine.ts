import { Id, Logs } from "../../utils";

export interface BranchLineTable extends Id, Logs {
  BranchId: number;
  BranchName?: string;
  UserId: number;
  UserName?: string;
}
export type BranchLineTables = BranchLineTable[];
export const BranchLineInitial: BranchLineTable = {
  BranchId: 0,
  UserId: 0,
};
