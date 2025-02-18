import { Id, Logs } from "../generic";

export enum CertificateStatus {
  DEFAULT = "",
  ACTIVE = "active",
  EXPIRED = "expired",
  REVOKED = "revoked",
  INVALID = "invalid",
}

export interface CertificateTable extends Id, Logs {
  Name: string;
  IssuedTo: string;
  Issuer: string;
  ExpiryDate: string;
  CertificateType: string; // Proffesional, Academic
  CertificateNumber: string; // Unique
  Status: CertificateStatus;
  AttachmentURL: string | null;
}
export type CertificateTables = CertificateTable[];
export const CertificateInitial: CertificateTable = {
  Name: "",
  IssuedTo: "",
  Issuer: "",
  ExpiryDate: "",
  CertificateType: "",
  CertificateNumber: "",
  Status: CertificateStatus.DEFAULT,
  AttachmentURL: null,
};
