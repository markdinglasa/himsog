import { Id, Logs } from "../../utils";
export interface ArticleTable extends Id, Logs {
  Title: string;
  Description: string | null;
  DatePosted: string;
  PostedBy: string;
  IsValidated: boolean;
  Image: string | null;
  Link: string | null;
}
export type ArticleTables = ArticleTable[];
export const ArticleInitial: ArticleTable = {
  Title: "Article Title",
  Description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  DatePosted: new Date().toString(),
  PostedBy: "Ash ketchup",
  Image: null,
  Link: null,
  IsValidated: false,
};
