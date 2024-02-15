import prismaClient from "../../index";

class ListGameService {
  async handle() {
    const games = await prismaClient.game.findMany();

    return games;
  }

  async handleByGameId(gameId: string) {
    const game = await prismaClient.game.findFirst({
      where: {
        id: gameId,
      },
    });

    return game;
  }
}

export { ListGameService };
