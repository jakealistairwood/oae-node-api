import { orchestra } from "../../data/data.js";

export const getOrchestra = (req, res) => {
    res.send(orchestra);
};

export const getPlayer = (req, res) => {
    const { id } = req.params;
    const player = orchestra.find(player => player.id === id);
    if (!player)
        res.status(404).send(
            `Apologies! We are unable to find a player with the id ${id}.`
        );
    res.send(player);
};

export const createPlayer = (req, res) => {
    const player = req.body;
    const formatID = player.name.toLowerCase().split(" ").join("_");
    orchestra.push({ ...player, id: formatID });
    res.send(
        `The player ${player.name} has successfully been added to the database!`
    );
};

export const deletePlayer = (req, res) => {
    const { id } = req.params;
    orchestra = orchestra.filter(player => player.id !== id);
    res.send(`The player with the ${id} has been deleted.`);
};
