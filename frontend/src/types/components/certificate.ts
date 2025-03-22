import { CertificateTable, ProfessionTable } from "../dbtables";

export interface CertificateProps {
  OnEdit: () => void;
  OnDelete: () => void;
  Data: CertificateTable;
}

export interface ProfessionProps {
  OnEdit: () => void;
  OnDelete: () => void;
  Data: ProfessionTable;
}
