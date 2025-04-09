import { HeadCell } from "../../components";
import { ArticleTable } from "../../dbtables";

export const ArticleHC: HeadCell<ArticleTable>[] = [
  {
    Id: "Title",
    numeric: false,
    disablePadding: false,
    label: "Title",
  },
  {
    Id: "PostedBy",
    numeric: false,
    disablePadding: false,
    label: "Posted",
  },
  {
    Id: "DatePosted",
    numeric: false,
    disablePadding: false,
    label: "Date",
  },
  {
    Id: "Id",
    numeric: true,
    disablePadding: false,
    label: "Actions",
  },
];
