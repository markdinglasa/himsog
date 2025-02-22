import { Id, Logs } from "../../";

export interface DiscountTable extends Id, Logs {
  Name: string;
  DiscountRate: number;
  IsVATExempt: boolean;
  IsGovermentManadated: boolean;
  IsDateScheduled: boolean;
  DateStart: Date | string | null;
  DateEnd: Date | string | null;
  IsDayScheduled: boolean;
  IsMonday: boolean;
  IsTuesday: boolean;
  IsWednesday: boolean;
  IsThursday: boolean;
  IsFriday: boolean;
  IsSaturday: boolean;
  IsSunday: boolean;
}
export type DiscountTables = DiscountTable[];
export const DiscountInitial: DiscountTable = {
  RecNumber: "",
  Name: "",
  DiscountRate: 0,
  IsVATExempt: false,
  IsGovermentManadated: false,
  IsDateScheduled: false,
  DateStart: "",
  DateEnd: "",
  IsDayScheduled: false,
  IsMonday: false,
  IsTuesday: false,
  IsWednesday: false,
  IsThursday: false,
  IsFriday: false,
  IsSaturday: false,
  IsSunday: false,
};
