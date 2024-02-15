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

  async handleByUserId(userId: string) {
    const reviews = await prismaClient.gameReview.findMany({
      where: {
        user_id: userId,
      },
    });

    return reviews;
  }
}

export { ListReviewService };
