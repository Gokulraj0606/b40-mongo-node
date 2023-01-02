// const express = require("express"); // "type": "commonjs"
import express from "express"; // "type": "module"
import { MongoClient } from "mongodb";
import * as dotenv from 'dotenv'
dotenv.config()

// environment variables
console.log(process.env.MONGO_URL)

const app = express();

const PORT = 4000;
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

// app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`)); 

// http://localhost:4000/movies
app.get("/movies", async function (request, response) {
    if (request.query.rating) {
        request.query.rating = +request.query.rating
    }
    console.log(request.query)
    // db.movies.find({})

    // cursor pagination / cursor -> Array // toArray()
    const movies = await client
        .db("b40wd")
        .collection("movies")
        .find(request.query)
        .toArray();
    // console.log(movies)

    response.send(movies);
})

// http://localhost:4000/movies/99
app.get("/movies/:id", async function (request, response) {
    const { id } = request.params
    // console.log(request.params, id)
    // const movie = movies.find((mv) => mv.id === id)

    // // db.movies.findone({id : "100"})
    const movie = await client
        .db("b40wd")
        .collection("movies")
        .findOne({ id: id });

    console.log(movie)
    // response.send(movie);
    movie ? response.send(movie) : response.status(404).send({ message: "movies not found" })
});

app.post("/movies", async function (request, response) {
    const data = request.body
    console.log(data)
    // db.movies.insertMany(data)
    const result = await client.db("b40wd").collection("movies").insertMany(data);


    response.send(result);
})

app.delete("/movies/:id", async function (request, response) {
    const { id } = request.params
    // db.movies.deleteOne({id: '100'})

    // const movie = movies.find((mv) => mv.id === id)


    const result = await client
        .db("b40wd")
        .collection("movies")
        .deleteOne({ id: id });

    console.log(result)
    // response.send(movie);
    result.deletedCount > 0
        ? response.send({ message: "movies deleted successfully" })
        : response.status(404).send({ message: "movies not found" })
});

app.put("/movies/:id", async function (request, response) {
    const { id } = request.params
    const data = request.body
    // db.movies.updateOne({id; "99"}, {$set: {rating: 9} } )

    // const movie = movies.find((mv) => mv.id === id)


    const result = await client
        .db("b40wd")
        .collection("movies")
        .updateOne({ id: id }, { $set: data });

    console.log(result)
    response.send(result);

});




app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));

