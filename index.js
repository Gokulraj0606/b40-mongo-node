// const express = require("express"); // "type": "commonjs"
import express from "express"; // "type": "module"
import { MongoClient } from "mongodb";
import * as dotenv from 'dotenv'
import moviesRouter from "./routes/movies.route.js"
// moviesRouter is user define
import userRouter from "./routes/user.route.js"
import cors from "cors"


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
app.use(cors())

// localhost/
app.get("/", function (request, response) {
    response.send("🙋‍♂️, 🌏 🎊✨🤩");
});

app.use("/movies", moviesRouter)
app.use("/user", userRouter)



// const mobiles = [
//     {
//         model: "OnePlus 9 5G",
//         img: "https://m.media-amazon.com/images/I/61fy+u9uqPL._SX679_.jpg",
//         company: "Oneplus"
//     },
//     {
//         model: "Iphone 13 mini",
//         img:
//             "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-mini-blue-select-2021?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1645572315986",
//         company: "Apple"
//     },
//     {
//         model: "Samsung s21 ultra",
//         img: "https://m.media-amazon.com/images/I/81kfA-GtWwL._SY606_.jpg",
//         company: "Samsung"
//     },
//     {
//         model: "Xiomi mi 11",
//         img: "https://m.media-amazon.com/images/I/51K4vNxMAhS._AC_SX522_.jpg",
//         company: "Xiomi"
//     }
// ];
// // http://localhost:4000/mobiles
// app.get("/mobiles", (request, response) => {
//     response.send(mobiles)
// })




// app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`)); 

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));



export { client }