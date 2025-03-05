import { Id, Logs } from "../../utils";
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

export interface UserTable extends Id, Logs {
  Email: string;
  Password?: string;
  ConfirmPassword?: string;
  Firstname: string;
  Middlename: string | null;
  Lastname: string;
  ContactNumber: string;
  Role: UserRole;
  CivilStatus: CivilStatus;
  ProfilePhoto: string | null;
  IsSuspended: boolean;
  BirthDate: string | null;
  Fullname?: string;
  Gender: string;
}

export type UserTables = UserTable[];
export const UserInitial: UserTable = {
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
  BirthDate: "",
  Gender: "",
};

export interface UserEmail extends Id, Logs {
  Email: string;
  Password: string;
}
export interface UserPassword extends Id, Logs {
  Password: string;
  ConfirmPassword: string;
  CurrentPassword: string;
}
