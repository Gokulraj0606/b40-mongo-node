import { client } from "../index.js";
import bcrypt from "bcrypt"

export async function generateHashedPassword(password) {
    const NO_OF_ROUNDS = 10
    const salt = await bcrypt.genSalt(NO_OF_ROUNDS)
    const hashedPassword = await bcrypt.hash(password, salt)
    console.log(salt)
    console.log(hashedPassword)
    return hashedPassword
}
// generateHashedPassword("password@123")

// db.user.insertOne(data)
export async function createUser(data) {
    return await client.db("b40wd").collection("users").insertOne(data);
}
export async function getUserByName(username) {
    return await client
        .db("b40wd")
        .collection("users")
        .findOne({ username: username });
}
