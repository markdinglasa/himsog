export interface ContactUsTable {
  Firstname: string;
  Lastname: string;
  Email: string;
  Message: string;
}
export type ContactUsTables = ContactUsTable[];
export const ContactUsInitial: ContactUsTable = {
  Firstname: "",
  Lastname: "",
  Email: "",
  Message: "",
};
