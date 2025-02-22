import { Id, Logs } from "../../utils";

export interface CollectionLineTable extends Id, Logs {
  CollectionId: number;
  Amount: number;
  PayTypeId: number;
  PayTypeName?: string;
  StockInId: number | null;
  AccountId: number;
  AccountName?: string;
  CheckNumber: string | null;
  CheckDate: string | null;
  CheckBank: string | null;
  CreditCardVerificationCode: string | null;
  CreditCardNumber: string | null;
  CreditCardType: string | null;
  CreditCardBank: string | null;
  GiftCertificateNumber: string | null;
  OtherInformation: string | null;
  CreditCardReferenceNumber: string | null;
  CreditCardHolderName: string | null;
  CreditCardExpiry: string | null;
}
export type CollectionLineTables = CollectionLineTable[];
export const CollectionLineInitial: CollectionLineTable = {
  CollectionId: 0,
  Amount: 0,
  PayTypeId: 0,
  StockInId: 0,
  AccountId: 0,
  CheckNumber: null,
  CheckDate: null,
  CreditCardVerificationCode: null,
  CreditCardNumber: null,
  CreditCardType: null,
  CreditCardBank: null,
  GiftCertificateNumber: null,
  OtherInformation: null,
  CreditCardReferenceNumber: null,
  CreditCardHolderName: null,
  CreditCardExpiry: null,
  CreatedBy: 0,
  DateCreated: new Date(),
  CheckBank: null,
};
