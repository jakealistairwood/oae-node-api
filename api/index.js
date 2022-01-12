import express from "express";
const app = express();
const port = process.env.PORT || 3000;

import { eventRoutes } from "./routes/events.js";
import { orchestraRoutes } from "./routes/orchestra.js";

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

app.use(express.json());
app.use("/events", eventRoutes);
app.use("/orchestra", orchestraRoutes);

app.listen(port, () => {
    console.log(`Listening on PORT: ${port}`);
});
