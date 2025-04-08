import { Id, Logs } from "../generic";

export enum CivilStatus {
  DEFAULT = "",
  SINGLE = "single",
  MARRIED = "married",
  DIVORCED = "divorced",
  WIDOWED = "widowed",
  SEPARETED = "legally-separated",
}
export enum UserRole {
  DEFAULT = "",
  CLIENT = "client",
  NUTRITIONIST = "nutritionist",
  ADMINISTRATOR = "administrator",
  SUPERUSER = "superuser",
}
export interface RegisterTable extends Id, Logs {
  Email: string;
  Password: string;
  Role: UserRole;
}

export interface UserTable extends Id, Logs {
  Email: string;
  Password: string;
  Firstname: string;
  Middlename: string | null;
  Lastname: string;
  ContactNumber: string;
  Role: UserRole;
  CivilStatus: CivilStatus;
  ProfilePhoto: string | null;
  IsSuspended: boolean;
  Genrder: string;
  Religion: string;
  GoogleId: string | null;
}
export type UserTables = UserTable[];
export const UserInital: UserTable = {
  Email: "",
  Password: "",
  Firstname: "",
  Middlename: null,
  Lastname: "",
  ContactNumber: "",
  Role: UserRole.DEFAULT,
  CivilStatus: CivilStatus.SINGLE,
  ProfilePhoto: null,
  IsSuspended: false,
  Genrder: "",
  Religion: "",
  GoogleId: null,
};
