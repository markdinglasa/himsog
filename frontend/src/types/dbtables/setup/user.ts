import { Id, Logs } from "../../utils";

export interface UserTable extends Id, Logs {
  Name: string;
  Username: string;
  Email: string;
  Password: string;
  CardNumber: string;
  RoleId: number;
  RoleName?: string;
}
export type UserTables = UserTable[];
export const UserInitial: UserTable = {
  Name: "",
  Email: "",
  Password: "",
  CardNumber: "",
  RecNumber: "",
  Username: "",
  RoleId: 0,
};
