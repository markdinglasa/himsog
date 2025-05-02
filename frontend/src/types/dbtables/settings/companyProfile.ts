export interface CompanyTable {
  Name: string;
  Address: string;
  OperatedBy: string;
  ContactNumber: string;
  TIN: string;
  Email: string;
  ReceiptFooter: string;
  InvoiceFooter: string;
}
export const CompanyInitial: CompanyTable = {
  Name: "Cebu Innosoft Solution Services Inc.",
  Address: "Nutech JIY Tower, Katipunan St., Cebu City, 6000",
  OperatedBy: "Mark Dinglasa",
  ContactNumber: "+63 927-864-5960",
  TIN: "744-085-819-005",
  Email: "innosoft.inquiry@gmail.com",
  ReceiptFooter: `  BUS. STYLE _________________________
                    Cebu Innosoft Solutions Services Inc.
                    Nutech JIY Tower, Katipunan St., Cebu City, 6000
                    TIN: 261-481-387-000
                    ACCR: 082-261481387-000375-24583
                    ACCR Date: August 20, 2020`,
  InvoiceFooter: "",
};
