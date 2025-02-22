import { LoginTable } from "../../../types";

export const loginInitial: LoginTable = {
  Username: "",
  Password: "",
  CurrentDate: new Date(),
  BranchId: 0,
};

export type loginFormValues = typeof loginInitial;
