import express from "express";

const app = express();

const port = 3436;

app.use(express.json());

app.listen(port, () => console.log("Server Product running port 3434!"));
