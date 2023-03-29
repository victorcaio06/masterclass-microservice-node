import { Request, Response } from "express";
import { CreateClientUseCase } from "./create-client.useCase";

export class CreateClientController {
  constructor() {}

  async handle(request: Request, response: Response) {
    const createClientUseCase = new CreateClientUseCase();

    try {
      const result = await createClientUseCase.execute(request.body);
      return response.status(201).json(result);
    } catch (err) {
      console.log({ err });
      return response.status(400).json({ ERROR: err });
    }
  }
}
