import express from "express"
import { getMovies, getMoviesById, createMovies, deleteMoviesById, updateMoviesById } from "../services/movies.service.js";
import { createUser, getUserByName } from "../services/user.service.js";
import { generateHashedPassword } from "../services/user.service.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";


const router = express.Router();



router.post("/signup", async function (request, response) {
    const { username, password } = request.body

    // db.user.insertOne(data)
    const userFromDB = await getUserByName(username);
    console.log(userFromDB)

    if (userFromDB) {
        response.status(400).send({ message: "UserName already exists" })
    } else if (password.length < 8) {
        response.status(400).send({ message: "Password must be atleast 8 characters" })
    }
    else {
        const hashedPassword = await generateHashedPassword(password)
        const result = await createUser({ username: username, password: hashedPassword, roleId: 1 });


        response.send(result);

    }



})

router.post("/login", async function (request, response) {
    const { username, password } = request.body

    // db.user.insertOne(data)
    const userFromDB = await getUserByName(username);
    console.log(userFromDB)

    if (!userFromDB) {
        response.status(401).send({ message: "Invalid Credentials" })
    } else {
        const storedDBPassword = userFromDB.password;
        const isPasswordCheck = await bcrypt.compare(password, storedDBPassword)
        console.log(isPasswordCheck);
        if (isPasswordCheck) {
            const token = jwt.sign({ id: userFromDB._id }, process.env.SECRET_KEY)
            response.send({ message: "Successfull Login", token: token, roleId: userFromDB.roleId })
        }
        else {
            response.status(401).send({ message: "Invalid Credentials" })
        }
    }
})



export default router

