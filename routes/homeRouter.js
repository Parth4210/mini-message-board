const { Router } = require('express');
const homeRouter = Router();
const messages = require('../models/messages');

homeRouter.get("/", (req, res) => {
    res.render("index", {
        title: "Mini Message Board",
        messages: messages
    });
});

homeRouter.get("/message/:id", (req, res) => {
    const messageId = Number(req.params.id);
    const message = messages[messageId];

    if (!Number.isInteger(messageId) || messageId < 0 || !message) {
        return res.status(404).send("Message not found");
    }

    res.render("message", { message: message });
});

module.exports = homeRouter