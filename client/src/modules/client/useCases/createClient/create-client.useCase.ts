import { prismaClient } from "../../../../infra/database/prisma/prismaClient";

type CreateClientRequest = {
  name: string;
  password: string;
  email: string;
  phone: string;
};

export class CreateClientUseCase {
  constructor() {}

  async execute(data: CreateClientRequest) {
    const checkEmailExists = await prismaClient.client.findFirst({
      where: { email: data.email },
    });

    if (checkEmailExists) {
      throw new Error("Email already exists!");
    }

    const clientCreated = await prismaClient.client.create({
      data,
    });

    return clientCreated;
  }
}
