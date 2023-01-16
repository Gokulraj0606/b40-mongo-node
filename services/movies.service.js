import { ObjectId } from "mongodb";
import { client } from "../index.js";

export async function updateMoviesById(id, data) {
    return await client
        .db("b40wd")
        .collection("movies")
        .updateOne({ id: ObjectId(id) }, { $set: data });
}
export async function deleteMoviesById(id) {
    return await client
        .db("b40wd")
        .collection("movies")
        .deleteOne({ id: ObjectId(id) });
}
export async function createMovies(data) {
    return await client.db("b40wd").collection("movies").insertMany(data);
}
export async function getMoviesById(id) {
    return await client
        .db("b40wd")
        .collection("movies")
        .findOne({ id: ObjectId(id) });
}
export async function getMovies(request) {
    return await client
        .db("b40wd")
        .collection("movies")
        .find(request.query)
        .toArray();
}
