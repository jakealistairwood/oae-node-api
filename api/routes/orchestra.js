import express from "express";
import {
    getOrchestra,
    getPlayer,
    createPlayer,
    deletePlayer,
} from "../controllers/orchestra.js";

const router = express.Router();

router.get("/", getOrchestra);

router.post("/", createPlayer);

router.get("/:id", getPlayer);

router.delete("/:id", deletePlayer);

export { router as orchestraRoutes };
