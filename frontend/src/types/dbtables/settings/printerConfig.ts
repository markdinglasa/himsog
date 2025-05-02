import { Id } from "../../utils";

export interface PrinterConfigTable extends Id {
  PaperType: string;
  PaperSize: string;
  PrinterName: string;
  Orientation: string;
  MarginTop: number;
  MarginBottom: number;
  MarginLeft: number;
  MarginRight: number;
}
export type PrinterConfigTables = PrinterConfigTable[];
export const PrinterConfigInitial: PrinterConfigTable = {
  PaperType: "",
  PaperSize: "",
  PrinterName: "",
  Orientation: "",
  MarginTop: 0,
  MarginBottom: 0,
  MarginLeft: 0,
  MarginRight: 0,
};
