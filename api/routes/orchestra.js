import express from "express";
import {
    getOrchestra,
    getPlayer,
    createPlayer,
} from "../controllers/orchestra.js";

const router = express.Router();

router.get("/", getOrchestra);

router.post("/", createPlayer);

router.get("/:id", getPlayer);

export { router as orchestraRoutes };
