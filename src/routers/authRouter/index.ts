import JWTAuth from "./jwtAuthRouter";
import OAuth from "./oAuthRouter";
import express from "express";

const router = express.Router();
router.use(JWTAuth);
router.use(OAuth);

export default router;
