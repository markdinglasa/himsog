import http from "http";
import express from "express";
import "./config/logging";
import helmet from "helmet";
import {
  corsHandler,
  loggingHandler,
  route404,
  route204,
  route500,
} from "./middleware";
import { NODE_ENV, server, testConnection } from "./config";
import router from "./controllers";

const app = express();
export let httpServer: ReturnType<typeof http.createServer>;

export const initializeApp = async () => {
  logging.log("----------------------------------------");
  logging.log("Initializing Server");
  logging.log("----------------------------------------");
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  await testConnection();

  logging.log("----------------------------------------");
  logging.log("Logging & Configuration");
  logging.log("----------------------------------------");
  app.use(helmet());
  app.use(loggingHandler);
  app.use(corsHandler);
  app.use(route500);
  app.options("/*", route204);
  app.use(router);
  app.use(route404);

  logging.log("----------------------------------------");
  logging.log("Starting Server");
  logging.log("----------------------------------------");
  httpServer = http.createServer(app);
  httpServer.listen(server.SERVER_PORT, () => {
    logging.log("----------------------------------------");
    logging.log(
      `Server started on ${server.SERVER_HOSTNAME}:${server.SERVER_PORT}`,
    );
    logging.log("----------------------------------------");
  });
};

if (NODE_ENV !== "test") {
  initializeApp();
}

export default app;

//export const Shutdown = (callback: any) => httpServer && httpServer.close(callback);
