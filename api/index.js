import express from "express";
const app = express();
const port = process.env.PORT || 3000;

import { eventRoutes } from "./routes/events.js";

app.use(express.json());
app.use("/events", eventRoutes);

app.listen(port, () => {
    console.log(`Listening on PORT: ${port}`);
});
