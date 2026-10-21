const express = require('express')
const app = express()
const homeRouter = require('./routes/homeRouter')
const path = require("node:path");
const newMessageRouter = require('./routes/newMessageRouter');

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use("/", homeRouter)
app.use("/new", newMessageRouter)


const PORT = 3000
app.listen(process.env.PORT || PORT, (error)=>{
    if(error){
        throw error
    }
    console.log(`Connected to index.js and listening on PORT ${PORT}`)
})