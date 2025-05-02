export interface POSSettingsTable
  extends DefaultRecordTable,
    PrintingTable,
    ReceiptTable,
    LEDDisplayTable {}

export interface DefaultRecordTable {
  PeriodId: number;
  TerminalId: number;
  CustomerId: number;
  DiscountId: number;
  SupplierId: number;
}
export const DefaultRecordTableInitial: DefaultRecordTable = {
  PeriodId: 0,
  TerminalId: 0,
  CustomerId: 0,
  DiscountId: 0,
  SupplierId: 0,
};

export interface PrintingTable {
  SalesReport: string;
  CollectionReport: string;
  ReturnReport: string;
  IsPromptLogin: boolean;
  IsAliasPrinting: boolean;
  Tenant: string;
}
export const PrintingInitial: PrintingTable = {
  SalesReport: "Sales Order Small",
  CollectionReport: "Official Receipt Small",
  ReturnReport: "Return Slip",
  IsPromptLogin: false,
  IsAliasPrinting: false,
  Tenant: "NA",
};

export interface ReceiptTable {
  IsSIVATAnalysis: boolean;
  IsORVATAnalysis: boolean;
  ORPrintTitle: string;
  IsEjectDrawerOnPrint: boolean;
}
export const ReceiptInitial: ReceiptTable = {
  IsSIVATAnalysis: false,
  IsORVATAnalysis: true,
  ORPrintTitle: "OFFICIAL RECEIPT",
  IsEjectDrawerOnPrint: true,
};

export interface LEDDisplayTable {
  IsLEDDisplay: boolean;
  LEDPort: number;
  LEDPortSettings: string;
  IsCustomerDisplay: boolean;
  CustomerDisplayRight: string;
  CustomerDisplayDown: string;
  CustomerDisplayWidth: string;
  CustomerDisplayHeight: string;
}
export const LEDDisplayInitial: LEDDisplayTable = {
  IsLEDDisplay: false,
  LEDPort: 3,
  LEDPortSettings: "baud=9600 parity=N data=8",
  IsCustomerDisplay: false,
  CustomerDisplayRight: "15380",
  CustomerDisplayDown: "",
  CustomerDisplayWidth: "15345",
  CustomerDisplayHeight: "11564",
};

export interface InventorySettingsTable {
  IsQuickInventory: boolean;
  IsNegativeInventory: boolean;
  IsDisableRealTimeInventory: boolean;
}
export const InventorySettingsInitial: InventorySettingsTable = {
  IsQuickInventory: true,
  IsNegativeInventory: true,
  IsDisableRealTimeInventory: true,
};

export interface OtherSettingsTable {
  IsPartialPrint: boolean;
  IsComponentEditing: boolean;
  IsExcludeZeroAmountInOR: boolean;
  IsLoginDate: boolean;
  IsPrintTransferTable: boolean;
  IsTriggerQuantity: boolean;
  IsHideSalesAmount: boolean;
  IsChangePrice: boolean;
  IsEditSellingPrice: boolean;
  IsEditCost: boolean;
  IsAuditLogs: boolean;
  IsAutoServiceCharge: boolean;
  ServiceChargeRate: number;
}
export const OtherSettingsInitial: OtherSettingsTable = {
  IsPartialPrint: false,
  IsComponentEditing: false,
  IsExcludeZeroAmountInOR: false,
  IsLoginDate: false,
  IsPrintTransferTable: false,
  IsTriggerQuantity: false,
  IsHideSalesAmount: false,
  IsChangePrice: true,
  IsEditSellingPrice: true,
  IsEditCost: true,
  IsAuditLogs: false,
  IsAutoServiceCharge: false,
  ServiceChargeRate: 0,
};
