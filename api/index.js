import express from "express";
const app = express();
const port = process.env.PORT || 3000;

import { events } from "../data/data.js";
import { eventRoutes } from "./routes/events.js";

app.use(express.json());
app.use("/events", eventRoutes);

// app.get("/", (req, res) => {
//     res.send("Hello World!");
// });

// app.get("/events", (req, res) => {
//     res.send(events);
// });

// app.get("/events/:id", (req, res) => {
//     // res.send(req.params.id);
//     const event = events.find(event => event.id === parseInt(req.params.id));
//     if (!event)
//         res.status(404).send(
//             "Apologies! We are unable to find an event with the given ID"
//         );
//     res.send(event);
// });

// app.post("/events/", (req, res) => {
//     const event = {
//         id: 3,
//         name: "Faust Plays Schaumann",
//         series: "Southbank Centre Series",
//         time: "19.30",
//         date: "15-02-22",
//         location: "Southbank Centre's Royal Festival Hall, London",
//         imageSrc: "images/placeholder.png",
//         imageAlt: "Event Poster",
//         uniqueURL: "",
//         featuredEvent: false,
//         intro: {
//             heading:
//                 "If this is your first Bach, the Universe & Everything (BAE), welcome!",
//             content:
//                 "We like to think of the series as a community, similar to the one Bach enjoyed in Leipzig where he produced cantatas at an extraordinary rate, providing innovative music for the weekly services at the church where he worked from 1723 until his death in 1750. At that time, the congregation was as open to science and new ideas as it was united by faith. It is in the spirit that we come together for a thought-provoking cantata and a talk from a leading scientist. <br> Professor Jon Chapman from the University of Oxford invites us to ponder the fleeting moment when sound waves reach our ears before they disappear. Using some careful calculations, Jon suggests that we might even be able to hear the shape of a drum.",
//             quote: "A note from our Principal Keyboard, Steven Devine, about today’s programme:",
//             quoteCaption: null,
//         },
//         schedule: [
//             {
//                 name: "Welcome",
//                 title: null,
//                 author: null,
//                 description: null,
//                 alternateDescription: null,
//             },
//             {
//                 name: "Cantata",
//                 title: "Ach wie fluchtig, ach wie nichtig BWV 26",
//                 author: "JS Bach",
//                 description: "",
//                 alternateDescription: "", // This is used for any lyric translations. It will create a tab in the component that the end-user can switch between.
//             },
//         ],
//         orchestra: [{}],
//         theme: {
//             templateTheme: "Modern", // Modern or Classic. Modern uses a sans-serif font. (Poppins and PT Sans) Classic uses a serif (Playfair Display and Lato).
//             primaryColor: "#899EE2", // Represents the banner color on the website. Usually takes the dominant color present in the image poster.
//             accentColor: "#3c3c3c", // Accent Colour is used to style the call-to-action buttons.
//         },
//     };
//     events.push(event);
//     res.send(event);
// });

app.listen(port, () => {
    console.log(`Listening on PORT: ${port}`);
});
