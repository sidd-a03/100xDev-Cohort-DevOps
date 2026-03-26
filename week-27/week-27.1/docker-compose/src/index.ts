import "dotenv/config"
import express from 'express'
import { prisma } from "./lib/prisma";
import connectToDatabase from "./database/db";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hey there!!");
})

app.post("/signup", async (req, res) => {
    const { username, password } = req.body; 

    const user = await prisma.user.create({
        data: {
            username,
            password
        }
    })

    res.json({
        username,
        id: user.id
    })
})

app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`)
    connectToDatabase();
});