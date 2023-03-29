import { Router } from "express";
import { CreateClientController } from "../modules/client/useCases/createClient/create-client.controller";

const router = Router();

router.post("/customers", (request, response) => {
  new CreateClientController().handle(request, response);
});

export { router };
