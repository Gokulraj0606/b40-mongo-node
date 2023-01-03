// const express = require("express"); // "type": "commonjs"
import express from "express"; // "type": "module"
import { MongoClient } from "mongodb";
import * as dotenv from 'dotenv'
import moviesRouter from "./routes/movies.route.js"
// moviesRouter is user define

dotenv.config()

// environment variables
console.log(process.env.MONGO_URL)

const app = express();

const PORT = process.env.PORT; //auto assign port
// const MONGO_URL = "mongodb://127.0.0.1";
const MONGO_URL = process.env.MONGO_URL;

const client = new MongoClient(MONGO_URL); //ex dial in phone
await client.connect(); //ex dial in phonr
console.log("Mongo is connected !!")

// xml json text
// middleware - express.json()  (inbulit middleware)
// app.use -> intercepts -> applies express.json()
app.use(express.json())

// localhost/
app.get("/", function (request, response) {
    response.send("🙋‍♂️, 🌏 🎊✨🤩");
});

app.use("/movies", moviesRouter)

// app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`)); 





app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));

export { client }