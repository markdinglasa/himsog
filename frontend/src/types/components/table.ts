export type Order = "asc" | "desc";

export interface HeadCell<T> {
  Id: keyof T;
  disablePadding: boolean;
  label: string;
  numeric: boolean;
}

export interface EnhancedTableProps<T extends Record<string, any>> {
  Rows: T[];
  HeadCells: HeadCell<T>[];
  ClassName?: string;
  IsEdit?: boolean;
  OnRecordDelete: () => void;
  Title?: string;
  DetailsRoute?: string;
  RemoveApiRoute?: string;
  IsRemove?: boolean;
  IsLoading?: boolean;
  IsModal?: boolean;
  ToggleModal?: any;
  IsTableTool?: boolean;
  IsSales?: boolean;
  IsRecord?: boolean; // save record to global
  DefaultFilter?: string;
}
