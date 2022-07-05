import express from "express";
import { createAuth, getAuths } from "../controllers/auth.js";

const router = express.Router();

router.get("/", getAuths);
router.post("/", createAuth);

export default router;
