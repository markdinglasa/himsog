import { Id, Logs } from "../generic";

export interface ArticleTable extends Id, Logs {
  Title: string;
  Description: string | null;
  DatePosted: string | Date;
  PostedBy: string;
  IsValidated: boolean | null;
  Image: string | null;
}
export type ArticleTables = ArticleTable[];
export const ArticleInitial: ArticleTable = {
  Title: "",
  Description: null,
  DatePosted: "",
  PostedBy: "",
  IsValidated: null,
  Image: null,
};
