import express from "express";

const app = express();

const port = 3435;

app.use(express.json());

app.listen(port, () => console.log("Server Request running port 3434!"));
