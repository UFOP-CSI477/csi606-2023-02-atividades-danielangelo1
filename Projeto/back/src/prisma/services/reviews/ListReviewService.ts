import prismaClient from "../..";

class ListReviewService {
  async handle() {
    const reviews = await prismaClient.gameReview.findMany();

    return reviews;
  }

  async handleByGameId(gameId: string) {
    const reviews = await prismaClient.gameReview.findMany({
      where: {
        game_id: gameId,
      },
    });

    return reviews;
  }
}

export { ListReviewService };
