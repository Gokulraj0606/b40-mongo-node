import express from "express"
import { getMovies, getMoviesById, createMovies, deleteMoviesById, updateMoviesById } from "../services/movies.service.js";


const router = express.Router();

// http://localhost:4000/movies
router.get("/", async function (request, response) {
    if (request.query.rating) {
        request.query.rating = +request.query.rating
    }
    console.log(request.query)
    // db.movies.find({})

    // cursor pagination / cursor -> Array // toArray()
    const movies = await getMovies(request);
    // console.log(movies)

    response.send(movies);
})

// http://localhost:4000/movies/99
router.get("/:id", async function (request, response) {
    const { id } = request.params
    // console.log(request.params, id)
    // const movie = movies.find((mv) => mv.id === id)

    // // db.movies.findone({id : "100"})
    const movie = await getMoviesById(id);

    console.log(movie)
    // response.send(movie);
    movie ? response.send(movie) : response.status(404).send({ message: "movies not found" })
});

router.post("/", async function (request, response) {
    const data = request.body
    console.log(data)
    // db.movies.insertMany(data)
    const result = await createMovies(data);


    response.send(result);
})

router.delete("/:id", async function (request, response) {
    const { id } = request.params
    // db.movies.deleteOne({id: '100'})

    // const movie = movies.find((mv) => mv.id === id)


    const result = await deleteMoviesById(id);

    console.log(result)
    // response.send(movie);
    result.deletedCount > 0
        ? response.send({ message: "movies deleted successfully" })
        : response.status(404).send({ message: "movies not found" })
});

router.put("/:id", async function (request, response) {
    const { id } = request.params
    const data = request.body
    // db.movies.updateOne({id; "99"}, {$set: {rating: 9} } )

    // const movie = movies.find((mv) => mv.id === id)


    const result = await updateMoviesById(id, data);

    console.log(result)
    response.send(result);

});

export default router

