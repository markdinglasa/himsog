import AttachmentRouter from "./attachmentRouter";
import ConvoRouter from "./convoRouter";
import ChatRouter from "./chatRouter";
import MessageRouter from "./messageRouter";

import express from "express";

const Router = express.Router();
Router.use(AttachmentRouter);
Router.use(ConvoRouter);
Router.use(ChatRouter);
Router.use(MessageRouter);

export default Router;
