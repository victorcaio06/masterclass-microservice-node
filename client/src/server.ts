import express from "express";
import { prismaClient } from "./infra/database/prisma/prismaClient";
import { router } from "./infra/routes";

const app = express();

const port = 3434;

app.use(express.json());
app.use(router);

prismaClient
  .$connect()
  .then(() => {})
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => console.log("Server Client running port 3434!"));
