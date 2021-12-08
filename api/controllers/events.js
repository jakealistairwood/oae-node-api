import { v4 as uuidv4 } from "uuid";
import { events } from "../../data/data.js";

export const getEvents = (req, res) => res.send(events);

export const getEvent = (req, res) => {
    const { id } = req.params;
    const event = events.find(event => event.id === id);
    if (!event)
        res.status(404).send(
            `Apologies! We are unable to find an event with the id ${id}.`
        );
    res.send(event);
};

export const createEvent = (req, res) => {
    const event = req.body;
    events.push({ ...event, id: uuidv4() });
    res.send(
        `${event.name} of the series ${event.series} has been created successfully!`
    );
};

export const deleteEvent = (req, res) => {
    const { id } = req.params;
    events = events.filter(event => event.id !== id);
    res.send(`The event with the id ${id} has been deleted!`);
};
