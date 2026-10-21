const { Router } = require('express');
const newMessageRouter = Router();
const messages = require('../models/messages');

// Renders the form 
newMessageRouter.get("/", (req, res) => res.render("form", { title: "New Message Form"}));

newMessageRouter.post("/", (req, res)=>{
    console.log(req.body);
    messages.push({ text: req.body.msgText, user: req.body.author, added: new Date() });
    res.redirect("/")
})

module.exports = newMessageRouter