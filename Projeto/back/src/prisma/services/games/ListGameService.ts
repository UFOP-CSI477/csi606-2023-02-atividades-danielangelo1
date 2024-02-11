import prismaClient from "../../index";

class ListGameService {
  async handle() {
    const games = await prismaClient.game.findMany();

    return games;
  }
}

export { ListGameService };
