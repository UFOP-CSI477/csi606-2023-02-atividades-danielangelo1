import prismaClient from "../..";

class ListReviewService {
  async handle() {
    const reviews = await prismaClient.gameReview.findMany();

    return reviews;
  }
}

export { ListReviewService };
