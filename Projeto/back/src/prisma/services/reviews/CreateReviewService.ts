import prismaClient from "../..";

interface CreateReviewProps {
  game_id: string;
  user_id: string;
  review: string;
  rating: number;
}

class CreateReviewService {
  async handle({ game_id, user_id, review, rating }: CreateReviewProps) {
    if (!review || !rating) {
      throw new Error("Preencha todo os campos");
    }

    const gameReview = await prismaClient.gameReview.create({
      data: {
        game_id,
        user_id,
        review,
        rating,
      },
    });

    return gameReview;
  }
}

export { CreateReviewService };
