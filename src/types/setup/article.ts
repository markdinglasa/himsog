import { Id, Logs } from "../generic";

export interface ArticleTable extends Id, Logs {
  Title: string;
  Description: string | null;
  DatePosted: string;
  PostedBy: string;
  IsValidated: boolean;
  Image: string | null;
}
export type ArticleTables = ArticleTable[];
export const ArticleInitial: ArticleTable = {
  Title: "",
  Description: null,
  DatePosted: "",
  PostedBy: "",
  IsValidated: false,
  Image: null,
};
