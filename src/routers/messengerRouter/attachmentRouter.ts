import express from "express";
import { TokenHandler } from "../../middleware";
import { RouteChannel } from "../../types";
import { API_VERSION } from "../../constants";
import {
  ArticleAddController,
  ArticleGetController,
  ArticleGetAllValidatedController,
  ArticleGetAllInValidatedController,
  ArticleRemoveController,
  ArticleUpdateController,
  ArticleGetWithQueryController,
} from "../../controllers";

const router = express.Router();
router.get(
  `${API_VERSION}${RouteChannel.ARTICLES}`,
  ArticleGetWithQueryController,
);
router.get(
  `${API_VERSION}${RouteChannel.ARTICLE_VALDIATED}`,
  TokenHandler.verifyToken,
  ArticleGetAllValidatedController,
);
router.get(
  `${API_VERSION}${RouteChannel.ARTICLE_INVALDIATED}`,
  TokenHandler.verifyToken,
  ArticleGetAllInValidatedController,
);
router.post(
  `${API_VERSION}${RouteChannel.ARTICLE}`,
  TokenHandler.verifyToken,
  ArticleAddController,
);
router.get(
  `${API_VERSION}${RouteChannel.ARTICLE_ID}`,
  TokenHandler.verifyToken,
  ArticleGetController,
);
router.delete(
  `${API_VERSION}${RouteChannel.ARTICLE_ID}`,
  TokenHandler.verifyToken,
  ArticleRemoveController,
);
router.patch(
  `${API_VERSION}${RouteChannel.ARTICLE_ID}`,
  TokenHandler.verifyToken,
  ArticleUpdateController,
);

logging.log("----------------------------------------");
logging.log("---------ATTACHMENT CONTROLLER----------");
logging.log(`GET ${RouteChannel.ARTICLES} [get-all-with-query]`);
logging.log(`GET ${RouteChannel.ARTICLE_VALDIATED} [get-all-validated]`);
logging.log(`GET ${RouteChannel.ARTICLE_INVALDIATED} [get-all-invalidated]`);
logging.log(`POST ${RouteChannel.ARTICLE} [add]`);
logging.log(`GET ${RouteChannel.ARTICLE_ID} [get]`);
logging.log(`DELETE ${RouteChannel.ARTICLE_ID} [remove]`);
logging.log(`PATCH ${RouteChannel.ARTICLE_ID} [update]`);
logging.log("----------------------------------------");

export default router;
