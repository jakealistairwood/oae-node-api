import express from "express";
import {
    getEvents,
    getEvent,
    createEvent,
    deleteEvent,
} from "../controllers/events.js";

const router = express.Router();

// Standard Route
router.get("/", getEvents);

// Create an Event
router.post("/", createEvent);

// Event Index Route
router.get("/:id", getEvent);

// Delete Index
router.delete("/:id", deleteEvent);

export { router as eventRoutes };
