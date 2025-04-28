import express from "express";
import { handleVisitor } from "../controllers/visitor.controllers.js";

const router = express.Router();

router.post("/", handleVisitor);

export default router;
