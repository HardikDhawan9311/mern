import express from 'express';
import cors from 'cors';
import { getUsers, getUser, createUser } from './ConatactUsDatabse.js'; // Ensure the correct file name

const app = express();

app.use(cors());
app.use(express.json()); // Corrected this line

app.get("/users", async (req, res, next) => {
    try {
        const users = await getUsers();
        res.send(users);
    } catch (err) {
        next(err);
    }
});

app.get("/users/:userid", async (req, res, next) => {
    try {
        const userid = req.params.userid;
        const user = await getUser(userid);
        if (!user) {
            return res.status(404).send('User not found');
        }
        res.send(user);
    } catch (err) {
        next(err);
    }
});

app.post("/users", async (req, res, next) => {
    try {
        const { username, email, phone_number, company_name, message } = req.body;
        if (!username || !email || !phone_number) {
            return res.status(400).send('Username, email, and phone number are required');
        }
        const user = await createUser(username, email, phone_number, company_name, message);
        res.status(201).send(user);
    } catch (err) {
        next(err);
    }
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!!');
});

app.listen(8080, () => {
    console.log("Server is Running on Port 8080");
});
