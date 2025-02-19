import JWTAuth from "./jwtAuthRoute";
import OAuth from "./oAuthRoute";
import express from "express";

const router = express.Router();
router.use(JWTAuth);
router.use(OAuth);

export default router;
