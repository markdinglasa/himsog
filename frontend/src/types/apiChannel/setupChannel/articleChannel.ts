import { BASE_URL } from "../../../shared";

export const ArticleChannel = {
  ARTICLE: `${BASE_URL}/setup/article`,
  ARTICLE_ID: `${BASE_URL}/setup/article/:Id`,
  ARTICLE_FILTER: `${BASE_URL}/setup/articles?filter=:filter&page=:page`,
  ARTICLE_INVALIDATED: `${BASE_URL}/setup/article/invalidated`,
};
