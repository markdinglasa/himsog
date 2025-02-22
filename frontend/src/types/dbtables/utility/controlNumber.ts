import { Id } from "../../utils";

export interface ControlNumberTable extends Id {
  ReadingDate: Date | string;
  ControlNumber: number;
}

export const ControlNumberInitial: ControlNumberTable = {
  ReadingDate: new Date(),
  ControlNumber: 0,
};
